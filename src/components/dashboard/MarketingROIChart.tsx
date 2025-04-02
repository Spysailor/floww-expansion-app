import React from 'react'
import { BarChart } from '@tremor/react'

interface MarketingROIChartProps {
  className?: string;
}

const MarketingROIChart: React.FC<MarketingROIChartProps> = ({ className }) => {
  // Données ROI marketing fictives
  const roiData = [
    {
      canal: "Instagram Ads",
      "ROI global": 3.2,
      "ROI Belgique": 3.5,
      "ROI France": 2.7
    },
    {
      canal: "Facebook Ads",
      "ROI global": 2.8,
      "ROI Belgique": 3.1,
      "ROI France": 2.5
    },
    {
      canal: "Influence",
      "ROI global": 4.6,
      "ROI Belgique": 5.2,
      "ROI France": 3.9
    },
    {
      canal: "Email",
      "ROI global": 7.3,
      "ROI Belgique": 7.3,
      "ROI France": 7.1
    },
    {
      canal: "Pop-up stores",
      "ROI global": 2.1,
      "ROI Belgique": 2.3,
      "ROI France": 1.8
    }
  ]

  // Le formateur de valeur pour afficher avec 1 décimale et le symbole €
  const valueFormatter = (number: number) => `${number.toFixed(1)}x`

  return (
    <div className={className}>
      <BarChart
        data={roiData}
        index="canal"
        categories={["ROI global", "ROI Belgique", "ROI France"]}
        colors={["blue", "violet", "pink"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </div>
  )
}

export default MarketingROIChart
