import React from 'react'
import { 
  Card, 
  Title, 
  Text,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Badge,
  Button
} from '@tremor/react'

import { 
  BuildingStorefrontIcon, 
  PlusIcon,
  MapPinIcon,
  UserIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const Partners: React.FC = () => {
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
          
          <TabGroup>
            <TabList>
              <Tab>Tous (8)</Tab>
              <Tab>Actifs (6)</Tab>
              <Tab>Prospects (2)</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="mt-4 overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Partenaire</TableHeaderCell>
                        <TableHeaderCell>Localisation</TableHeaderCell>
                        <TableHeaderCell>Contact</TableHeaderCell>
                        <TableHeaderCell>Statut</TableHeaderCell>
                        <TableHeaderCell>Activité récente</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-md bg-floww-primary/20 flex items-center justify-center text-floww-primary">
                              <BuildingStorefrontIcon className="h-5 w-5" />
                            </div>
                            <span className="font-medium">Concept Store Bruxelles</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-4 w-4 text-gray-500" />
                            <div>
                              <span>Bruxelles</span>
                              <span className="block text-xs text-gray-500">Belgique</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <UserIcon className="h-4 w-4 text-gray-500" />
                              <span>Marie Dufour</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                              <span className="text-xs">contact@conceptstore-bxl.be</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge color="green">Actif</Badge>
                        </TableCell>
                        <TableCell>
                          <Text>Commande 780€ (28/03/2025)</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-md bg-floww-primary/20 flex items-center justify-center text-floww-primary">
                              <BuildingStorefrontIcon className="h-5 w-5" />
                            </div>
                            <span className="font-medium">Maison Jolie</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-4 w-4 text-gray-500" />
                            <div>
                              <span>Anvers</span>
                              <span className="block text-xs text-gray-500">Belgique</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <UserIcon className="h-4 w-4 text-gray-500" />
                              <span>Johan Peeters</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                              <span className="text-xs">info@maisonjolie.be</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge color="green">Actif</Badge>
                        </TableCell>
                        <TableCell>
                          <Text>Commande 450€ (15/03/2025)</Text>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-md bg-floww-accent/20 flex items-center justify-center text-floww-accent">
                              <BuildingStorefrontIcon className="h-5 w-5" />
                            </div>
                            <span className="font-medium">Le Bon Marché</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-4 w-4 text-gray-500" />
                            <div>
                              <span>Paris</span>
                              <span className="block text-xs text-gray-500">France</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <UserIcon className="h-4 w-4 text-gray-500" />
                              <span>Émilie Rousseau</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
                              <span className="text-xs">e.rousseau@lebonmarche.fr</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge color="amber">Prospect</Badge>
                        </TableCell>
                        <TableCell>
                          <Text>À contacter (20/04/2025)</Text>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-4 text-center p-8 text-gray-500">
                  Filtrage des partenaires actifs
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-4 text-center p-8 text-gray-500">
                  Filtrage des prospects
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
