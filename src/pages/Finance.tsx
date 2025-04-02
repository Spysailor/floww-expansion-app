import React from 'react'
import { Card, Title, Text } from '@tremor/react'

const Finance: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1>Finance</h1>
      <Card>
        <Title>Suivi financier</Title>
        <Text>
          Cette page affichera les analyses financières pour l'expansion de Floww en Europe.
        </Text>
      </Card>
    </div>
  )
}

export default Finance
