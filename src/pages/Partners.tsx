import React, { useState } from 'react'
import { 
  Card, 
  Title, 
  Text, 
  Tab, 
  TabList, 
  TabGroup, 
  TabPanel, 
  TabPanels,
  TextInput,
  Select,
  SelectItem,
  Button,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Badge,
  MultiSelect,
  MultiSelectItem
} from '@tremor/react'
import { 
  MagnifyingGlassIcon, 
  PlusIcon, 
  ArrowsUpDownIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingStorefrontIcon,
  UserIcon,
  ClockIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

// Type pour les partenaires
interface Partner {
  id: number;
  name: string;
  type: 'concept-store' | 'boutique-hotel' | 'marketplace' | 'pop-up';
  location: string;
  country: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  status: 'prospect' | 'négociation' | 'actif' | 'inactif';
  lastOrder?: {
    date: string;
    amount: number;
  };
  pipeline?: string;
  nextFollowUp?: string;
}

const Partners: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  // Données des partenaires (combinant actifs et prospects)
  const partnersData: Partner[] = [
    {
      id: 1,
      name: "Concept Store Bruxelles",
      type: "concept-store",
      location: "Bruxelles",
      country: "Belgique",
      contactName: "Marie Dufour",
      contactEmail: "contact@conceptstore-bxl.be",
      contactPhone: "+32 2 123 45 67",
      status: "actif",
      lastOrder: {
        date: "28/03/2025",
        amount: 780
      }
    },
    {
      id: 2,
      name: "Maison Jolie",
      type: "concept-store",
      location: "Anvers",
      country: "Belgique",
      contactName: "Johan Peeters",
      contactEmail: "info@maisonjolie.be",
      contactPhone: "+32 3 765 43 21",
      status: "actif",
      lastOrder: {
        date: "15/03/2025",
        amount: 450
      }
    },
    {
      id: 3,
      name: "Boutique Éclectique",
      type: "concept-store",
      location: "Paris",
      country: "France",
      contactName: "Claire Martin",
      contactEmail: "claire@boutique-eclectique.fr",
      contactPhone: "+33 1 42 33 44 55",
      status: "actif",
      lastOrder: {
        date: "22/03/2025",
        amount: 920
      }
    },
    {
      id: 4,
      name: "L'Atelier des Créateurs",
      type: "marketplace",
      location: "Lyon",
      country: "France",
      contactName: "Lucas Dubois",
      contactEmail: "lucas@atelierdesCreateurs.fr",
      contactPhone: "+33 4 78 12 34 56",
      status: "actif",
      lastOrder: {
        date: "05/03/2025",
        amount: 380
      }
    },
    {
      id: 5,
      name: "Floral Design Shop",
      type: "concept-store",
      location: "Amsterdam",
      country: "Pays-Bas",
      contactName: "Emma Visser",
      contactEmail: "emma@floraldesign.nl",
      contactPhone: "+31 20 123 45 67",
      status: "actif",
      lastOrder: {
        date: "18/03/2025",
        amount: 260
      }
    },
    {
      id: 6,
      name: "Naturel & Bio",
      type: "boutique-hotel",
      location: "Luxembourg-ville",
      country: "Luxembourg",
      contactName: "Sarah Meyer",
      contactEmail: "contact@naturel-bio.lu",
      contactPhone: "+352 27 12 34 56",
      status: "actif",
      lastOrder: {
        date: "01/03/2025",
        amount: 210
      }
    },
    {
      id: 7,
      name: "Galeries Lafayette",
      type: "marketplace",
      location: "Paris",
      country: "France",
      contactName: "Thomas Lefebvre",
      contactEmail: "tlefebvre@galerieslafayette.com",
      contactPhone: "+33 1 44 55 66 77",
      status: "négociation",
      pipeline: "Présentation produits envoyée",
      nextFollowUp: "15/04/2025"
    },
    {
      id: 8,
      name: "Design Market Brussels",
      type: "pop-up",
      location: "Bruxelles",
      country: "Belgique",
      contactName: "Julie Vandenberg",
      contactEmail: "julie@designmarket.be",
      contactPhone: "+32 2 987 65 43",
      status: "négociation",
      pipeline: "Intéressé pour événement de juin",
      nextFollowUp: "10/04/2025"
    },
    {
      id: 9,
      name: "Hotel Bloom Garden",
      type: "boutique-hotel",
      location: "Bruges",
      country: "Belgique",
      contactName: "Nicolas Blomme",
      contactEmail: "boutique@bloomgarden.be",
      contactPhone: "+32 50 12 34 56",
      status: "prospect",
      pipeline: "Premier contact établi",
      nextFollowUp: "22/04/2025"
    },
    {
      id: 10,
      name: "Le Bon Marché",
      type: "marketplace",
      location: "Paris",
      country: "France",
      contactName: "Émilie Rousseau",
      contactEmail: "e.rousseau@lebonmarche.fr",
      contactPhone: "+33 1 23 45 67 89",
      status: "prospect",
      pipeline: "À contacter",
      nextFollowUp: "20/04/2025"
    },
    {
      id: 11,
      name: "Stylist Corner",
      type: "concept-store",
      location: "Berlin",
      country: "Allemagne",
      contactName: "Max Schmidt",
      contactEmail: "max@stylistcorner.de",
      contactPhone: "+49 30 123 45 678",
      status: "prospect",
      pipeline: "Intéressé par échantillons",
      nextFollowUp: "18/04/2025"
    },
    {
      id: 12,
      name: "Le Grand Bazar",
      type: "concept-store",
      location: "Liège",
      country: "Belgique",
      contactName: "Mathilde Leroy",
      contactEmail: "m.leroy@grandbazar.be",
      contactPhone: "+32 4 223 44 55",
      status: "inactif",
      lastOrder: {
        date: "15/10/2024",
        amount: 350
      }
    }
  ]

  // Liste des pays disponibles
  const countries = Array.from(new Set(partnersData.map(partner => partner.country)))
  
  // Liste des types de partenaires
  const partnerTypes = [
    { value: 'concept-store', label: 'Concept Store' },
    { value: 'boutique-hotel', label: 'Boutique d\'hôtel' },
    { value: 'marketplace', label: 'Marketplace' },
    { value: 'pop-up', label: 'Pop-up Store' }
  ]

  // Statuts de partenaires
  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'prospect', label: 'Prospect' },
    { value: 'négociation', label: 'En négociation' },
    { value: 'actif', label: 'Actif' },
    { value: 'inactif', label: 'Inactif' }
  ]

  // Filtrer les partenaires en fonction des critères
  const filteredPartners = partnersData.filter(partner => {
    // Filtrer par recherche
    const matchesSearch = 
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.contactName.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Filtrer par pays
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(partner.country)
    
    // Filtrer par type
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(partner.type)
    
    // Filtrer par statut
    const matchesStatus = selectedStatus === 'all' || partner.status === selectedStatus
    
    return matchesSearch && matchesCountry && matchesType && matchesStatus
  })

  // Fonction pour rendre le badge de statut
  const renderStatusBadge = (status: Partner['status']) => {
    const statusConfig = {
      'prospect': { color: 'gray', label: 'Prospect' },
      'négociation': { color: 'amber', label: 'En négociation' },
      'actif': { color: 'green', label: 'Actif' },
      'inactif': { color: 'red', label: 'Inactif' }
    }
    const config = statusConfig[status]
    
    return (
      <Badge color={config.color as any}>{config.label}</Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1>Partenaires B2B</h1>
        <Button icon={PlusIcon} variant="primary" color="indigo">
          Ajouter un partenaire
        </Button>
      </div>

      <Card>
        <div className="space-y-4">
          <Title>Gestion des partenaires</Title>
          <Text>Gérez vos partenaires B2B et suivez les prospects commerciaux</Text>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <TextInput 
              icon={MagnifyingGlassIcon} 
              placeholder="Rechercher un partenaire..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MultiSelect 
              value={selectedCountries} 
              onValueChange={setSelectedCountries}
              placeholder="Filtrer par pays"
            >
              {countries.map((country) => (
                <MultiSelectItem key={country} value={country}>
                  {country}
                </MultiSelectItem>
              ))}
            </MultiSelect>
            <MultiSelect 
              value={selectedTypes} 
              onValueChange={setSelectedTypes}
              placeholder="Type de partenaire"
            >
              {partnerTypes.map((type) => (
                <MultiSelectItem key={type.value} value={type.value}>
                  {type.label}
                </MultiSelectItem>
              ))}
            </MultiSelect>
            <Select 
              value={selectedStatus} 
              onValueChange={setSelectedStatus}
              placeholder="Statut"
            >
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          <TabGroup>
            <TabList>
              <Tab>Tous ({filteredPartners.length})</Tab>
              <Tab>Actifs ({filteredPartners.filter(p => p.status === 'actif').length})</Tab>
              <Tab>Prospects ({filteredPartners.filter(p => p.status === 'prospect' || p.status === 'négociation').length})</Tab>
              <Tab>Inactifs ({filteredPartners.filter(p => p.status === 'inactif').length})</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="mt-4">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Partenaire</TableHeaderCell>
                        <TableHeaderCell>Localisation</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Contact</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                        <TableHeaderCell>Dernière activité</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredPartners.map((partner) => (
                        <TableRow key={partner.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 rounded-md bg-floww-primary/20 flex items-center justify-center text-floww-primary">
                                <BuildingStorefrontIcon className="h-5 w-5" />
                              </div>
                              <span className="font-medium">{partner.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <MapPinIcon className="h-4 w-4 text-gray-500" />
                              <div>
                                <span>{partner.location}</span>
                                <span className="block text-xs text-gray-500">{partner.country}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {partnerTypes.find(t => t.value === partner.type)?.label}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <UserIcon className="h-4 w-4 text-gray-500" />
                                <span>{partner.contactName}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                                <span className="text-xs">{partner.contactEmail}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {renderStatusBadge(partner.status)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <ClockIcon className="h-4 w-4 text-gray-500" />
                              <div>
                                {partner.lastOrder ? (
                                  <>
                                    <span>Commande le {partner.lastOrder.date}</span>
                                    <span className="block text-xs text-gray-500">{partner.lastOrder.amount} €</span>
                                  </>
                                ) : (
                                  <>
                                    <span>{partner.pipeline}</span>
                                    <span className="block text-xs text-gray-500">Suivi: {partner.nextFollowUp}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="light" color="gray" icon={ChevronRightIcon} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabPanel>
              <TabPanel>
                {/* Contenu identique mais filtré seulement pour les actifs */}
                <div className="mt-4">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Partenaire</TableHeaderCell>
                        <TableHeaderCell>Localisation</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Contact</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                        <TableHeaderCell>Dernière activité</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredPartners
                        .filter(p => p.status === 'actif')
                        .map((partner) => (
                          <TableRow key={partner.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <div className="h-8 w-8 rounded-md bg-floww-primary/20 flex items-center justify-center text-floww-primary">
                                  <BuildingStorefrontIcon className="h-5 w-5" />
                                </div>
                                <span className="font-medium">{partner.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <MapPinIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  <span>{partner.location}</span>
                                  <span className="block text-xs text-gray-500">{partner.country}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {partnerTypes.find(t => t.value === partner.type)?.label}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <UserIcon className="h-4 w-4 text-gray-500" />
                                  <span>{partner.contactName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                                  <span className="text-xs">{partner.contactEmail}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {renderStatusBadge(partner.status)}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <ClockIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  {partner.lastOrder && (
                                    <>
                                      <span>Commande le {partner.lastOrder.date}</span>
                                      <span className="block text-xs text-gray-500">{partner.lastOrder.amount} €</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button variant="light" color="gray" icon={ChevronRightIcon} />
                            </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabPanel>
              <TabPanel>
                {/* Contenu similaire pour les prospects */}
                <div className="mt-4">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Partenaire potentiel</TableHeaderCell>
                        <TableHeaderCell>Localisation</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Contact</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                        <TableHeaderCell>Pipeline</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredPartners
                        .filter(p => p.status === 'prospect' || p.status === 'négociation')
                        .map((partner) => (
                          <TableRow key={partner.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <div className="h-8 w-8 rounded-md bg-floww-accent/20 flex items-center justify-center text-floww-accent">
                                  <BuildingStorefrontIcon className="h-5 w-5" />
                                </div>
                                <span className="font-medium">{partner.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <MapPinIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  <span>{partner.location}</span>
                                  <span className="block text-xs text-gray-500">{partner.country}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {partnerTypes.find(t => t.value === partner.type)?.label}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <UserIcon className="h-4 w-4 text-gray-500" />
                                  <span>{partner.contactName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                                  <span className="text-xs">{partner.contactEmail}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {renderStatusBadge(partner.status)}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <ClockIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  <span>{partner.pipeline}</span>
                                  <span className="block text-xs text-gray-500">Suivi: {partner.nextFollowUp}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button variant="light" color="gray" icon={ChevronRightIcon} />
                            </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabPanel>
              <TabPanel>
                {/* Contenu pour les inactifs */}
                <div className="mt-4">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Partenaire</TableHeaderCell>
                        <TableHeaderCell>Localisation</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Contact</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                        <TableHeaderCell>Dernière activité</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredPartners
                        .filter(p => p.status === 'inactif')
                        .map((partner) => (
                          <TableRow key={partner.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <div className="h-8 w-8 rounded-md bg-gray-200 flex items-center justify-center text-gray-500">
                                  <BuildingStorefrontIcon className="h-5 w-5" />
                                </div>
                                <span className="font-medium">{partner.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <MapPinIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  <span>{partner.location}</span>
                                  <span className="block text-xs text-gray-500">{partner.country}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {partnerTypes.find(t => t.value === partner.type)?.label}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <UserIcon className="h-4 w-4 text-gray-500" />
                                  <span>{partner.contactName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                                  <span className="text-xs">{partner.contactEmail}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {renderStatusBadge(partner.status)}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <ClockIcon className="h-4 w-4 text-gray-500" />
                                <div>
                                  {partner.lastOrder && (
                                    <>
                                      <span>Dernière: {partner.lastOrder.date}</span>
                                      <span className="block text-xs text-gray-500">{partner.lastOrder.amount} €</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button variant="light" color="gray" icon={ChevronRightIcon} />
                            </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </Card>
    </div>
  )
}

export default Partners
