import React from 'react'
import { Card, Title, Text, Tab, TabList, TabGroup, TabPanel, TabPanels, Metric, Flex, ProgressBar } from '@tremor/react'
import { 
  CurrencyEuroIcon, 
  ShoppingBagIcon,
  UserGroupIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

const Dashboard: React.FC = () => {
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
        <Card decoration="top" decorationColor="indigo">
          <div className="flex justify-between items-center">
            <div>
              <Text>Chiffre d'affaires</Text>
              <Metric>32 600 €</Metric>
            </div>
            <div className="bg-indigo-100 p-3 rounded-md">
              <CurrencyEuroIcon className="h-6 w-6 text-indigo-700" />
            </div>
          </div>
          <Text className="mt-2 text-gray-500">+16% vs mois précédent</Text>
        </Card>
        
        <Card decoration="top" decorationColor="blue">
          <div className="flex justify-between items-center">
            <div>
              <Text>Ventes B2C</Text>
              <Metric>126</Metric>
            </div>
            <div className="bg-blue-100 p-3 rounded-md">
              <ShoppingBagIcon className="h-6 w-6 text-blue-700" />
            </div>
          </div>
          <Text className="mt-2 text-gray-500">+12% commandes en ligne</Text>
        </Card>
        
        <Card decoration="top" decorationColor="purple">
          <div className="flex justify-between items-center">
            <div>
              <Text>Partenaires B2B</Text>
              <Metric>6</Metric>
            </div>
            <div className="bg-purple-100 p-3 rounded-md">
              <UserGroupIcon className="h-6 w-6 text-purple-700" />
            </div>
          </div>
          <Text className="mt-2 text-gray-500">+2 concept stores actifs</Text>
        </Card>
        
        <Card decoration="top" decorationColor="amber">
          <div className="flex justify-between items-center">
            <div>
              <Text>Expéditions</Text>
              <Metric>112</Metric>
            </div>
            <div className="bg-amber-100 p-3 rounded-md">
              <TruckIcon className="h-6 w-6 text-amber-700" />
            </div>
          </div>
          <Text className="mt-2 text-gray-500">délai moyen: 4.2j</Text>
        </Card>
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

      {/* Graphiques et listes - Simplifiés pour cette version */}
      <div className="grid grid-cols-1 gap-6 mt-6">
        <Card>
          <Title>Aperçu des ventes par pays</Title>
          <Text>Version simplifiée du tableau de bord pour démarrage rapide</Text>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
