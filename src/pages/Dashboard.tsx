import React from 'react'
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, ProgressBar } from '@tremor/react'
import SalesByCountryChart from '../components/dashboard/SalesByCountryChart'
import MarketingROIChart from '../components/dashboard/MarketingROIChart'
import PartnersList from '../components/dashboard/PartnersList'
import KPICard from '../components/dashboard/KPICard'
import { 
  CurrencyEuroIcon, 
  ShoppingBagIcon,
  UserGroupIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

const Dashboard = () => {
  // Données fictives pour le tableau de bord
  const objectifs = {
    belgique: {
      ca: { actuel: 18500, cible: 20000 },
      partenaires: { actuel: 3, cible: 5 },
      conversion: { actuel: 2.1, cible: 2.5 }
    },
    france: {
      ca: { actuel: 12300, cible: 30000 },
      partenaires: { actuel: 2, cible: 10 },
      conversion: { actuel: 1.8, cible: 2.5 }
    },
    europe: {
      ca: { actuel: 32600, cible: 50000 },
      partenaires: { actuel: 6, cible: 15 },
      conversion: { actuel: 1.9, cible: 2.5 }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1>Tableau de bord</h1>
        <div className="flex items-center space-x-2">
          <select className="form-input py-1 w-40">
            <option value="all">Tous les pays</option>
            <option value="be">Belgique</option>
            <option value="fr">France</option>
            <option value="nl">Pays-Bas</option>
          </select>
          <select className="form-input py-1 w-40">
            <option value="mtd">Mois en cours</option>
            <option value="qtd">Trimestre en cours</option>
            <option value="ytd">Année en cours</option>
          </select>
        </div>
      </div>

      {/* KPIs principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Chiffre d'affaires" 
          value="32 600 €" 
          delta="+16%" 
          icon={<CurrencyEuroIcon className="h-8 w-8" />}
          description="vs mois précédent"
          color="green"
        />
        <KPICard 
          title="Ventes B2C" 
          value="126" 
          delta="+12%" 
          icon={<ShoppingBagIcon className="h-8 w-8" />}
          description="commandes en ligne"
          color="blue"
        />
        <KPICard 
          title="Partenaires B2B" 
          value="6" 
          delta="+2" 
          icon={<UserGroupIcon className="h-8 w-8" />}
          description="concept stores actifs"
          color="purple"
        />
        <KPICard 
          title="Expéditions" 
          value="112" 
          delta="-3%" 
          icon={<TruckIcon className="h-8 w-8" />}
          description="délai moyen: 4.2j"
          color="amber"
        />
      </div>

      {/* Progression des objectifs */}
      <Card className="mt-6">
        <Title>Progression des objectifs - Expansion</Title>
        <TabGroup>
          <TabList className="mt-4">
            <Tab>Belgique</Tab>
            <Tab>France</Tab>
            <Tab>Total Europe</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-4 space-y-6">
                <div>
                  <Flex>
                    <Text>Chiffre d'affaires</Text>
                    <Text>{objectifs.belgique.ca.actuel} € / {objectifs.belgique.ca.cible} €</Text>
                  </Flex>
                  <ProgressBar value={objectifs.belgique.ca.actuel / objectifs.belgique.ca.cible * 100} color="teal" className="mt-2" />
                </div>
                <div>
                  <Flex>
                    <Text>Partenaires B2B</Text>
                    <Text>{objectifs.belgique.partenaires.actuel} / {objectifs.belgique.partenaires.cible}</Text>
                  </Flex>
                  <ProgressBar value={objectifs.belgique.partenaires.actuel / objectifs.belgique.partenaires.cible * 100} color="indigo" className="mt-2" />
                </div>
                <div>
                  <Flex>
                    <Text>Taux de conversion e-commerce</Text>
                    <Text>{objectifs.belgique.conversion.actuel}% / {objectifs.belgique.conversion.cible}%</Text>
                  </Flex>
                  <ProgressBar value={objectifs.belgique.conversion.actuel / objectifs.belgique.conversion.cible * 100} color="amber" className="mt-2" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4 space-y-6">
                <div>
                  <Flex>
                    <Text>Chiffre d'affaires</Text>
                    <Text>{objectifs.france.ca.actuel} € / {objectifs.france.ca.cible} €</Text>
                  </Flex>
                  <ProgressBar value={objectifs.france.ca.actuel / objectifs.france.ca.cible * 100} color="teal" className="mt-2" />
                </div>
                <div>
                  <Flex>
                    <Text>Partenaires B2B</Text>
                    <Text>{objectifs.france.partenaires.actuel} / {objectifs.france.partenaires.cible}</Text>
                  </Flex>
                  <ProgressBar value={objectifs.france.partenaires.actuel / objectifs.france.partenaires.cible * 100} color="indigo" className="mt-2" />
                </div>
                <div>
                  <Flex>
                    <Text>Taux de conversion e-commerce</Text>
                    <Text>{objectifs.france.conversion.actuel}% / {objectifs.france.conversion.cible}%</Text>
                  </Flex>
                  <ProgressBar value={objectifs.france.conversion.actuel / objectifs.france.conversion.cible * 100} color="amber" className="mt-2" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4 space-y-6">
                <div>
                  <Flex>
                    <Text>Chiffre d'affaires</Text>
                    <Text>{objectifs.europe.ca.actuel} € / {objectifs.europe.ca.cible} €</Text>
                  </Flex>
                  <ProgressBar value={objectifs.europe.ca.actuel / objectifs.europe.ca.cible * 100} color="teal" className="mt-2" />
                </div>
                <div>
                  <Flex>
                    <Text>Partenaires B2B</Text>
                    <Text>{objectifs.europe.partenaires.actuel} / {objectifs.europe.partenaires.cible}</Text>
                  </Flex>
                  <ProgressBar value={objectifs.europe.partenaires.actuel / objectifs.europe.partenaires.cible * 100} color="indigo" className="mt-2" />
                </div>
                <div>
                  <Flex>
                    <Text>Taux de conversion e-commerce</Text>
                    <Text>{objectifs.europe.conversion.actuel}% / {objectifs.europe.conversion.cible}%</Text>
                  </Flex>
                  <ProgressBar value={objectifs.europe.conversion.actuel / objectifs.europe.conversion.cible * 100} color="amber" className="mt-2" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>

      {/* Graphiques et listes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <Title>Répartition des ventes par pays</Title>
          <Text>30 derniers jours</Text>
          <SalesByCountryChart className="mt-4 h-80" />
        </Card>
        
        <Card>
          <Title>ROI Marketing par canal</Title>
          <Text>CA généré pour 1€ investi</Text>
          <MarketingROIChart className="mt-4 h-80" />
        </Card>
      </div>

      {/* Liste des partenaires actifs */}
      <Card className="mt-6">
        <Title>Partenaires B2B actifs</Title>
        <Text>Dernières commandes et performance</Text>
        <PartnersList className="mt-4" />
      </Card>
    </div>
  )
}

export default Dashboard
