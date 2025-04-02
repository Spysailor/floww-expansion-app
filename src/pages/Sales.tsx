import React from 'react'
import { Card, Title, Text } from '@tremor/react'

const Sales: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1>Ventes</h1>
      <Card>
        <Title>Gestion des ventes</Title>
        <Text>
          Cette page affichera les statistiques de ventes B2C et B2B pour l'expansion de Floww en Europe.
        </Text>
      </Card>
    </div>
  )
}

export default Sales
