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
  BarChart,
  DonutChart,
  Select,
  SelectItem,
  Badge,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Col,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  AreaChart
} from '@tremor/react'

import { 
  CalendarIcon, 
  ChartBarIcon, 
  CheckCircleIcon,
  ClockIcon,
  PlusIcon,
  CurrencyEuroIcon,
  PresentationChartLineIcon,
  PhotoIcon,
  HashtagIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

// Types pour les données marketing
interface MarketingCampaign {
  id: number;
  name: string;
  platform: string;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  status: 'active' | 'planned' | 'completed' | 'paused';
  kpis: {
    reach: number;
    clicks: number;
    conversions: number;
    revenue: number;
  };
}

interface MarketingChannel {
  name: string;
  budget: number;
  spent: number;
  ROI: number;
  CPA: number;
  status: 'active' | 'inactive';
}

const Marketing: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mtd')
  const [selectedCountry, setSelectedCountry] = useState('all')

  // Données des campagnes marketing
  const campaigns: MarketingCampaign[] = [
    {
      id: 1,
      name: "Lancement Collection Printemps",
      platform: "Instagram",
      startDate: "01/03/2025",
      endDate: "15/04/2025",
      budget: 600,
      spent: 450,
      status: "active",
      kpis: {
        reach: 28000,
        clicks: 920,
        conversions: 46,
        revenue: 1610
      }
    },
    {
      id: 2,
      name: "Partenariat Influenceuse BE",
      platform: "Instagram",
      startDate: "15/03/2025",
      endDate: "15/04/2025",
      budget: 300,
      spent: 300,
      status: "active",
      kpis: {
        reach: 15600,
        clicks: 620,
        conversions: 31,
        revenue: 1085
      }
    },
    {
      id: 3,
      name: "Promotion Code FLEURPARIS",
      platform: "Facebook",
      startDate: "01/03/2025",
      endDate: "31/03/2025",
      budget: 350,
      spent: 350,
      status: "completed",
      kpis: {
        reach: 19200,
        clicks: 760,
        conversions: 28,
        revenue: 980
      }
    },
    {
      id: 4,
      name: "Marketplace Etsy - SEO",
      platform: "Etsy",
      startDate: "15/02/2025",
      endDate: "15/05/2025",
      budget: 150,
      spent: 75,
      status: "active",
      kpis: {
        reach: 4200,
        clicks: 310,
        conversions: 12,
        revenue: 420
      }
    },
    {
      id: 5,
      name: "Pop-up Store Bruxelles",
      platform: "Événement",
      startDate: "10/04/2025",
      endDate: "12/04/2025",
      budget: 500,
      spent: 200,
      status: "planned",
      kpis: {
        reach: 0,
        clicks: 0,
        conversions: 0,
        revenue: 0
      }
    },
    {
      id: 6,
      name: "Newsletter clients UE",
      platform: "Email",
      startDate: "01/04/2025",
      endDate: "05/04/2025",
      budget: 50,
      spent: 0,
      status: "planned",
      kpis: {
        reach: 0,
        clicks: 0,
        conversions: 0,
        revenue: 0
      }
    }
  ]

  // Données des canaux marketing
  const channels: MarketingChannel[] = [
    {
      name: "Instagram Ads",
      budget: 900,
      spent: 750,
      ROI: 3.2,
      CPA: 15.82,
      status: "active"
    },
    {
      name: "Facebook Ads",
      budget: 350,
      spent: 350,
      ROI: 2.8,
      CPA: 12.50,
      status: "active"
    },
    {
      name: "Influence",
      budget: 300,
      spent: 300,
      ROI: 4.6,
      CPA: 9.68,
      status: "active"
    },
    {
      name: "Email",
      budget: 50,
      spent: 0,
      ROI: 7.3,
      CPA: 0,
      status: "active"
    },
    {
      name: "Pop-up stores",
      budget: 500,
      spent: 200,
      ROI: 2.1,
      CPA: 0,
      status: "active"
    },
    {
      name: "SEO",
      budget: 200,
      spent: 75,
      ROI: 5.6,
      CPA: 6.25,
      status: "active"
    }
  ]

  // Données pour les graphiques
  const budgetByPlatform = [
    { platform: "Instagram", budget: 900 },
    { platform: "Facebook", budget: 350 },
    { platform: "Événements", budget: 500 },
    { platform: "Email", budget: 50 },
    { platform: "Etsy", budget: 150 },
    { platform: "SEO", budget: 200 }
  ]

  const countriesBudget = [
    { country: "Belgique", budget: 1200, spent: 950 },
    { country: "France", budget: 700, spent: 450 },
    { country: "Pays-Bas", budget: 150, spent: 100 },
    { country: "Luxembourg", budget: 50, spent: 50 },
    { country: "Allemagne", budget: 50, spent: 25 }
  ]

  const performanceData = [
    {
      date: "01/03/2025",
      "Reach": 2000,
      "Clicks": 80,
      "Conversions": 4
    },
    {
      date: "08/03/2025",
      "Reach": 3500,
      "Clicks": 140,
      "Conversions": 7
    },
    {
      date: "15/03/2025",
      "Reach": 5800,
      "Clicks": 260,
      "Conversions": 15
    },
    {
      date: "22/03/2025",
      "Reach": 9200,
      "Clicks": 420,
      "Conversions": 22
    },
    {
      date: "29/03/2025",
      "Reach": 12500,
      "Clicks": 580,
      "Conversions": 31
    },
    {
      date: "02/04/2025",
      "Reach": 13600,
      "Clicks": 650,
      "Conversions": 34
    }
  ]

  // Fonction pour rendre le badge de statut
  const renderStatusBadge = (status: MarketingCampaign['status']) => {
    const statusConfig = {
      'active': { color: 'green', label: 'Active' },
      'planned': { color: 'blue', label: 'Planifiée' },
      'completed': { color: 'gray', label: 'Terminée' },
      'paused': { color: 'amber', label: 'En pause' }
    }
    const config = statusConfig[status]
    
    return (
      <Badge color={config.color as any}>{config.label}</Badge>
    )
  }

  // Calculer les totaux
  const totalBudget = channels.reduce((acc, channel) => acc + channel.budget, 0)
  const totalSpent = channels.reduce((acc, channel) => acc + channel.spent, 0)
  const totalReach = campaigns.reduce((acc, campaign) => acc + campaign.kpis.reach, 0)
  const totalRevenue = campaigns.reduce((acc, campaign) => acc + campaign.kpis.revenue, 0)
  const totalROI = totalRevenue / totalSpent || 0

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1>Marketing</h1>
        <div className="flex items-center space-x-2">
          <Select 
            value={selectedCountry} 
            onValueChange={setSelectedCountry}
            className="w-40"
          >
            <SelectItem value="all">Tous les pays</SelectItem>
            <SelectItem value="be">Belgique</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="nl">Pays-Bas</SelectItem>
          </Select>
          <Select 
            value={selectedPeriod} 
            onValueChange={setSelectedPeriod}
            className="w-40"
          >
            <SelectItem value="mtd">Mois en cours</SelectItem>
            <SelectItem value="qtd">Trimestre en cours</SelectItem>
            <SelectItem value="ytd">Année en cours</SelectItem>
          </Select>
          <Button variant="primary" color="indigo" icon={PlusIcon}>Créer campagne</Button>
        </div>
      </div>

      {/* Cartes de KPIs */}
      <Grid numItemsLg={4} className="gap-6">
        <Card decoration="top" decorationColor="indigo">
          <Flex justifyContent="between" alignItems="center">
            <div>
              <Text>Budget Marketing</Text>
              <Metric>{totalBudget} €</Metric>
              <Flex className="mt-2">
                <Text className="text-sm">{(totalSpent / totalBudget * 100).toFixed(0)}% utilisé</Text>
              </Flex>
            </div>
            <div className="bg-indigo-100 p-3 rounded-md">
              <CurrencyEuroIcon className="h-6 w-6 text-indigo-700" />
            </div>
          </Flex>
          <ProgressBar value={totalSpent / totalBudget * 100} color="indigo" className="mt-3" />
        </Card>
        <Card decoration="top" decorationColor="fuchsia">
          <Flex justifyContent="between" alignItems="center">
            <div>
              <Text>Audience atteinte</Text>
              <Metric>{totalReach.toLocaleString()}</Metric>
              <Text className="text-sm mt-2">Via tous les canaux</Text>
            </div>
            <div className="bg-fuchsia-100 p-3 rounded-md">
              <PresentationChartLineIcon className="h-6 w-6 text-fuchsia-700" />
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="green">
          <Flex justifyContent="between" alignItems="center">
            <div>
              <Text>Revenus générés</Text>
              <Metric>{totalRevenue.toLocaleString()} €</Metric>
              <Text className="text-sm mt-2">Attribution marketing</Text>
            </div>
            <div className="bg-green-100 p-3 rounded-md">
              <ChartBarIcon className="h-6 w-6 text-green-700" />
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="amber">
          <Flex justifyContent="between" alignItems="center">
            <div>
              <Text>ROI moyen</Text>
              <Metric>{totalROI.toFixed(1)}x</Metric>
              <Text className="text-sm mt-2">Pour 1€ investi</Text>
            </div>
            <div className="bg-amber-100 p-3 rounded-md">
              <CurrencyEuroIcon className="h-6 w-6 text-amber-700" />
            </div>
          </Flex>
        </Card>
      </Grid>

      {/* Graphiques */}
      <Grid numItemsMd={6} className="gap-6 mt-6">
        <Col numColSpanMd={4}>
          <Card>
            <Title>Performance Marketing</Title>
            <Text>Évolution hebdomadaire</Text>
            <AreaChart
              className="h-72 mt-4"
              data={performanceData}
              index="date"
              categories={["Reach", "Clicks", "Conversions"]}
              colors={["blue", "indigo", "violet"]}
              valueFormatter={(value) => value.toLocaleString()}
              showLegend
              yAxisWidth={40}
            />
          </Card>
        </Col>
        <Col numColSpanMd={2}>
          <Card>
            <Title>Répartition du budget</Title>
            <Text>Par plateforme marketing</Text>
            <DonutChart
              className="h-72 mt-4"
              data={budgetByPlatform}
              category="budget"
              index="platform"
              valueFormatter={(value) => `${value} €`}
              colors={["indigo", "violet", "fuchsia", "pink", "blue", "cyan"]}
            />
          </Card>
        </Col>
      </Grid>

      {/* Tableaux des campagnes et canaux */}
      <TabGroup>
        <TabList>
          <Tab>Campagnes</Tab>
          <Tab>Canaux Marketing</Tab>
          <Tab>Budget par pays</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card className="mt-4">
              <Title>Campagnes Marketing</Title>
              <Text>Suivi des campagnes actives et planifiées</Text>
              <Table className="mt-4">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Campagne</TableHeaderCell>
                    <TableHeaderCell>Plateforme</TableHeaderCell>
                    <TableHeaderCell>Période</TableHeaderCell>
                    <TableHeaderCell>Budget</TableHeaderCell>
                    <TableHeaderCell>Statut</TableHeaderCell>
                    <TableHeaderCell>Performances</TableHeaderCell>
                    <TableHeaderCell>ROI</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>{campaign.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {campaign.platform === "Instagram" && <PhotoIcon className="h-5 w-5" />}
                          {campaign.platform === "Facebook" && <HashtagIcon className="h-5 w-5" />}
                          {campaign.platform === "Etsy" && <ComputerDesktopIcon className="h-5 w-5" />}
                          {campaign.platform === "Événement" && <CalendarIcon className="h-5 w-5" />}
                          {campaign.platform === "Email" && <EnvelopeIcon className="h-5 w-5" />}
                          <span>{campaign.platform}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>{campaign.startDate} - {campaign.endDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <span>{campaign.budget} €</span>
                          <div className="w-24 mt-1">
                            <ProgressBar value={campaign.spent / campaign.budget * 100} color="blue" />
                          </div>
                          <span className="text-xs text-gray-500">{campaign.spent} € dépensés</span>
                        </div>
                      </TableCell>
                      <TableCell>{renderStatusBadge(campaign.status)}</TableCell>
                      <TableCell>
                        {campaign.status !== 'planned' ? (
                          <div className="space-y-1">
                            <Text className="text-xs">Portée: {campaign.kpis.reach.toLocaleString()}</Text>
                            <Text className="text-xs">Clics: {campaign.kpis.clicks}</Text>
                            <Text className="text-xs">Conversions: {campaign.kpis.conversions}</Text>
                          </div>
                        ) : (
                          <Text className="text-xs text-gray-500">À venir</Text>
                        )}
                      </TableCell>
                      <TableCell>
                        {campaign.spent > 0 ? (
                          <Badge color={campaign.kpis.revenue / campaign.spent >= 3 ? 'green' : campaign.kpis.revenue / campaign.spent >= 2 ? 'blue' : 'amber'}>
                            {(campaign.kpis.revenue / campaign.spent).toFixed(1)}x
                          </Badge>
                        ) : (
                          <Text className="text-xs text-gray-500">-</Text>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className="mt-4">
              <Title>Canaux Marketing</Title>
              <Text>Performance par canal</Text>
              <Table className="mt-4">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Canal</TableHeaderCell>
                    <TableHeaderCell>Budget</TableHeaderCell>
                    <TableHeaderCell>Dépenses</TableHeaderCell>
                    <TableHeaderCell>ROI</TableHeaderCell>
                    <TableHeaderCell>CPA</TableHeaderCell>
                    <TableHeaderCell>Statut</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {channels.map((channel) => (
                    <TableRow key={channel.name}>
                      <TableCell>{channel.name}</TableCell>
                      <TableCell>{channel.budget} €</TableCell>
                      <TableCell>
                        <div>
                          <span>{channel.spent} €</span>
                          <div className="w-24 mt-1">
                            <ProgressBar value={channel.spent / channel.budget * 100} color="blue" />
                          </div>
                          <span className="text-xs text-gray-500">{(channel.spent / channel.budget * 100).toFixed(0)}% utilisé</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge color={channel.ROI >= 3 ? 'green' : channel.ROI >= 2 ? 'blue' : 'amber'}>
                          {channel.ROI.toFixed(1)}x
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {channel.CPA ? `${channel.CPA.toFixed(2)} €` : '-'}
                      </TableCell>
                      <TableCell>
                        <Badge color={channel.status === 'active' ? 'green' : 'gray'}>
                          {channel.status === 'active' ? 'Actif' : 'Inactif'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className="mt-4">
              <Title>Budget par Pays</Title>
              <Text>Répartition géographique</Text>
              <BarChart
                className="mt-6 h-72"
                data={countriesBudget}
                index="country"
                categories={["budget", "spent"]}
                colors={["blue", "violet"]}
                valueFormatter={(value) => `${value} €`}
                yAxisWidth={48}
                stack
              />
              <Table className="mt-4">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Pays</TableHeaderCell>
                    <TableHeaderCell>Budget alloué</TableHeaderCell>
                    <TableHeaderCell>Dépenses</TableHeaderCell>
                    <TableHeaderCell>Utilisation</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countriesBudget.map((country) => (
                    <TableRow key={country.country}>
                      <TableCell>{country.country}</TableCell>
                      <TableCell>{country.budget} €</TableCell>
                      <TableCell>{country.spent} €</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <ProgressBar value={country.spent / country.budget * 100} className="w-32" />
                          <span>{(country.spent / country.budget * 100).toFixed(0)}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default Marketing
