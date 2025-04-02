import React, { useState } from 'react'
import { 
  Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels,
  Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell,
  Badge, BarChart, DonutChart, Button, Select, SelectItem,
  TextInput, DateRangePicker, DateRangePickerValue, Bold
} from '@tremor/react'

import { 
  ClockIcon, CheckCircleIcon, ExclamationCircleIcon, ArrowPathIcon,
  PlusIcon, MagnifyingGlassIcon, MapPinIcon, DocumentTextIcon
} from '@heroicons/react/24/outline'

// Types simplifiés
interface Shipment {
  id: string;
  orderId: string;
  orderType: 'B2C' | 'B2B';
  destination: { country: string; city: string; postalCode: string; };
  courier: string;
  trackingNumber: string;
  status: 'preparation' | 'shipped' | 'transit' | 'delivered' | 'issue';
  dateCreated: string;
  dateShipped?: string;
  dateDelivered?: string;
  lastUpdate: string;
  details: { items: number; weight: number; value: number; };
  customsInfo?: { declarationNumber?: string; taxesPaid?: number; clearanceDate?: string; };
  recipient: string;
}

interface ShipmentMetrics {
  avgDeliveryTime: { overall: number; byCountry: { [key: string]: number; } };
  deliveryStatus: { onTime: number; delayed: number; total: number; };
  issueRate: number;
  volumeByCountry: { country: string; count: number; }[];
  volumeByCarrier: { carrier: string; count: number; }[];
  volumeByMonth: { month: string; B2C: number; B2B: number; }[];
}

const Logistics: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState<DateRangePickerValue>({
    from: new Date(2025, 2, 1),
    to: new Date()
  })
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterCountry, setFilterCountry] = useState<string>('all')

  // Données fictives des expéditions
  const shipments: Shipment[] = [
    {
      id: "SHP-2503-1", orderId: "ORD-2503-145", orderType: "B2C",
      destination: { country: "Belgique", city: "Bruxelles", postalCode: "1000" },
      courier: "DHL Express", trackingNumber: "DHL9283748374", status: "delivered",
      dateCreated: "25/03/2025", dateShipped: "26/03/2025", dateDelivered: "28/03/2025",
      lastUpdate: "28/03/2025", details: { items: 1, weight: 0.2, value: 38 },
      customsInfo: { declarationNumber: "BE1234567", taxesPaid: 8.0, clearanceDate: "27/03/2025" },
      recipient: "Amélie Dubois"
    },
    {
      id: "SHP-2703-1", orderId: "ORD-2703-148", orderType: "B2C",
      destination: { country: "France", city: "Paris", postalCode: "75005" },
      courier: "DHL Express", trackingNumber: "DHL9283748375", status: "transit",
      dateCreated: "27/03/2025", dateShipped: "28/03/2025",
      lastUpdate: "29/03/2025", details: { items: 2, weight: 0.3, value: 72 },
      customsInfo: { declarationNumber: "FR7654321", taxesPaid: 14.4, clearanceDate: "29/03/2025" },
      recipient: "Claire Martin"
    },
    {
      id: "SHP-2603-1", orderId: "ORD-2603-149", orderType: "B2C",
      destination: { country: "Allemagne", city: "Berlin", postalCode: "10115" },
      courier: "DHL Express", trackingNumber: "DHL5678901234", status: "issue",
      dateCreated: "26/03/2025", dateShipped: "27/03/2025",
      lastUpdate: "29/03/2025", details: { items: 1, weight: 0.2, value: 35 },
      customsInfo: { declarationNumber: "DE5432109", taxesPaid: 6.65, clearanceDate: "28/03/2025" },
      recipient: "Max Schmidt"
    }
  ]

  // Données des métriques simplifiées
  const logisticsMetrics: ShipmentMetrics = {
    avgDeliveryTime: {
      overall: 2.8,
      byCountry: { "Belgique": 2.5, "France": 3.0, "Allemagne": 3.5 }
    },
    deliveryStatus: { onTime: 45, delayed: 3, total: 48 },
    issueRate: 1.8,
    volumeByCountry: [
      { country: "Belgique", count: 28 },
      { country: "France", count: 35 },
      { country: "Allemagne", count: 5 }
    ],
    volumeByCarrier: [
      { carrier: "DHL Express", count: 42 },
      { carrier: "La Poste", count: 15 }
    ],
    volumeByMonth: [
      { month: "Janvier", B2C: 12, B2B: 2 },
      { month: "Février", B2C: 18, B2B: 3 },
      { month: "Mars", B2C: 42, B2B: 7 }
    ]
  }

  // Fonction pour filtrer les expéditions
  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         shipment.recipient.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || shipment.status === filterStatus
    const matchesCountry = filterCountry === 'all' || shipment.destination.country === filterCountry
    return matchesSearch && matchesStatus && matchesCountry
  })

  // Fonction pour rendre le badge de statut
  const renderStatusBadge = (status: Shipment['status']) => {
    const statusConfig = {
      'preparation': { color: 'blue', label: 'En préparation' },
      'shipped': { color: 'indigo', label: 'Expédié' },
      'transit': { color: 'amber', label: 'En transit' },
      'delivered': { color: 'green', label: 'Livré' },
      'issue': { color: 'red', label: 'Problème' }
    }
    return <Badge color={statusConfig[status].color as any}>{statusConfig[status].label}</Badge>
  }

  // Obtenir la liste des pays et des statuts pour le filtrage
  const countries = Array.from(new Set(shipments.map(s => s.destination.country)))
  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'preparation', label: 'En préparation' },
    { value: 'shipped', label: 'Expédié' },
    { value: 'transit', label: 'En transit' },
    { value: 'delivered', label: 'Livré' },
    { value: 'issue', label: 'Problème' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1>Logistique & Expéditions</h1>
        <Button icon={PlusIcon} variant="primary" color="indigo">
          Nouvelle expédition
        </Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card decoration="top" decorationColor="indigo">
          <div className="flex justify-between items-center">
            <div>
              <Text>Délai de livraison moyen</Text>
              <div className="flex items-baseline space-x-1">
                <Bold className="text-2xl">{logisticsMetrics.avgDeliveryTime.overall}</Bold>
                <Text>jours</Text>
              </div>
            </div>
            <div className="bg-indigo-100 p-3 rounded-md">
              <ClockIcon className="h-6 w-6 text-indigo-700" />
            </div>
          </div>
        </Card>

        <Card decoration="top" decorationColor="green">
          <div className="flex justify-between items-center">
            <div>
              <Text>Livraisons à temps</Text>
              <div className="flex items-baseline space-x-1">
                <Bold className="text-2xl">{(logisticsMetrics.deliveryStatus.onTime / logisticsMetrics.deliveryStatus.total * 100).toFixed(1)}%</Bold>
                <Text>des commandes</Text>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-md">
              <CheckCircleIcon className="h-6 w-6 text-green-700" />
            </div>
          </div>
        </Card>

        <Card decoration="top" decorationColor="red">
          <div className="flex justify-between items-center">
            <div>
              <Text>Taux d'incidents</Text>
              <div className="flex items-baseline space-x-1">
                <Bold className="text-2xl">{logisticsMetrics.issueRate}%</Bold>
                <Text>des envois</Text>
              </div>
            </div>
            <div className="bg-red-100 p-3 rounded-md">
              <ExclamationCircleIcon className="h-6 w-6 text-red-700" />
            </div>
          </div>
        </Card>
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="col-span-3">
          <Title>Volume d'expéditions</Title>
          <Text>Par mois et type de client</Text>
          <BarChart
            className="mt-4 h-72"
            data={logisticsMetrics.volumeByMonth}
            index="month"
            categories={["B2C", "B2B"]}
            colors={["indigo", "violet"]}
            stack={false}
            yAxisWidth={40}
          />
        </Card>
        <Card className="col-span-2">
          <Title>Répartition par pays</Title>
          <Text>Volume des expéditions</Text>
          <DonutChart
            className="mt-4 h-72"
            data={logisticsMetrics.volumeByCountry}
            category="count"
            index="country"
            colors={["indigo", "violet", "fuchsia"]}
          />
        </Card>
      </div>

      {/* Tableau des expéditions */}
      <Card>
        <div className="space-y-4">
          <Title>Suivi des expéditions</Title>
          <Text>Gestion des colis et livraisons internationales</Text>
          
          <div className="flex flex-wrap gap-4">
            <TextInput 
              icon={MagnifyingGlassIcon} 
              placeholder="Rechercher par ID ou destinataire..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
            <Select 
              value={filterStatus} 
              onValueChange={setFilterStatus}
              className="max-w-xs"
            >
              {statusOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
            <Select 
              value={filterCountry} 
              onValueChange={setFilterCountry}
              className="max-w-xs"
            >
              <SelectItem value="all">Tous les pays</SelectItem>
              {countries.map(country => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </Select>
          </div>
          
          <DateRangePicker
            value={dateRange}
            onValueChange={setDateRange}
            className="max-w-sm mt-4"
          />

          <TabGroup className="mt-6">
            <TabList>
              <Tab>Toutes ({filteredShipments.length})</Tab>
              <Tab>En cours ({filteredShipments.filter(s => s.status === 'preparation' || s.status === 'shipped' || s.status === 'transit').length})</Tab>
              <Tab>Livrées ({filteredShipments.filter(s => s.status === 'delivered').length})</Tab>
              <Tab>Problèmes ({filteredShipments.filter(s => s.status === 'issue').length})</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="mt-4 overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>ID / Type</TableHeaderCell>
                        <TableHeaderCell>Destination</TableHeaderCell>
                        <TableHeaderCell>Transporteur</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                        <TableHeaderCell>Détails</TableHeaderCell>
                        <TableHeaderCell>Actions</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredShipments.map((shipment) => (
                        <TableRow key={shipment.id}>
                          <TableCell>
                            <div className="font-medium">{shipment.id}</div>
                            <div className="text-xs text-gray-500">{shipment.orderType} - {shipment.recipient}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <MapPinIcon className="h-4 w-4 text-gray-500" />
                              <div>
                                <div>{shipment.destination.city}</div>
                                <div className="text-xs text-gray-500">{shipment.destination.country}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>{shipment.courier}</div>
                            <div className="text-xs text-floww-primary">{shipment.trackingNumber}</div>
                          </TableCell>
                          <TableCell>
                            {renderStatusBadge(shipment.status)}
                          </TableCell>
                          <TableCell>
                            <div className="text-xs">
                              <div>Articles: {shipment.details.items}</div>
                              <div>Valeur: {shipment.details.value} €</div>
                              <div>Créé: {shipment.dateCreated}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="xs" variant="light" color="gray" icon={DocumentTextIcon} />
                              <Button size="xs" variant="light" color="gray" icon={ArrowPathIcon} />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabPanel>
              <TabPanel>
                {/* Contenu similaire mais limité aux expéditions en cours */}
                <div className="mt-4 text-center p-8 text-gray-500">
                  Filtrage des expéditions en cours
                </div>
              </TabPanel>
              <TabPanel>
                {/* Contenu pour les expéditions livrées */}
                <div className="mt-4 text-center p-8 text-gray-500">
                  Filtrage des expéditions livrées
                </div>
              </TabPanel>
              <TabPanel>
                {/* Contenu pour les expéditions problématiques */}
                <div className="mt-4 text-center p-8 text-gray-500">
                  Filtrage des expéditions avec problèmes
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </Card>
    </div>
  )
}

export default Logistics
