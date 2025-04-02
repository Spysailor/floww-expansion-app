import React, { ReactNode } from 'react'
import { Card, Text, Metric, Flex, BadgeDelta } from '@tremor/react'

interface KPICardProps {
  title: string;
  value: string;
  delta: string;
  description?: string;
  icon?: ReactNode;
  color?: 'green' | 'blue' | 'red' | 'amber' | 'purple';
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  delta,
  description,
  icon,
  color = 'blue'
}) => {
  // Déterminer si le delta est positif, négatif ou neutre
  const deltaType = delta.startsWith('+') 
    ? 'increase' 
    : delta.startsWith('-') 
      ? 'decrease' 
      : 'unchanged';

  return (
    <Card decoration="top" decorationColor={color}>
      <Flex justifyContent="between" alignItems="center">
        <Text>{title}</Text>
        {icon && <div className="text-gray-400">{icon}</div>}
      </Flex>
      <Metric className="mt-2">{value}</Metric>
      <Flex justifyContent="start" alignItems="center" className="mt-4">
        <BadgeDelta deltaType={deltaType}>{delta}</BadgeDelta>
        {description && (
          <Text className="ml-2 text-gray-500">{description}</Text>
        )}
      </Flex>
    </Card>
  )
}

export default KPICard
