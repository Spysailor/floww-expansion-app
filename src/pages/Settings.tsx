import React from 'react'
import { Card, Title, Text } from '@tremor/react'

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1>Paramètres</h1>
      <Card>
        <Title>Configuration de l'application</Title>
        <Text>
          Cette page permettra de configurer les paramètres de l'application.
        </Text>
      </Card>
    </div>
  )
}

export default Settings
