import React from 'react'
import { DonutChart, Legend } from '@tremor/react'

interface SalesByCountryChartProps {
  className?: string;
}

const SalesByCountryChart: React.FC<SalesByCountryChartProps> = ({ className }) => {
  // Données de ventes fictives par pays
  const sales = [
    { country: 'Belgique', amount: 18500, percentage: 56.7 },
    { country: 'France', amount: 12300, percentage: 37.7 },
    { country: 'Pays-Bas', amount: 850, percentage: 2.6 },
    { country: 'Luxembourg', amount: 480, percentage: 1.5 },
    { country: 'Allemagne', amount: 470, percentage: 1.5 },
  ]

  // Configuration des couleurs
  const valueFormatter = (number: number) => 
    `${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(number)}`

  return (
    <div className={className}>
      <DonutChart
        data={sales}
        category="amount"
        index="country"
        valueFormatter={valueFormatter}
        colors={['indigo', 'violet', 'fuchsia', 'rose', 'cyan']}
        className="h-56 mt-6"
      />
      <Legend
        categories={sales.map(item => item.country)}
        colors={['indigo', 'violet', 'fuchsia', 'rose', 'cyan']}
        className="mt-6"
      />
    </div>
  )
}

export default SalesByCountryChart
