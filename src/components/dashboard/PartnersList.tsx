import React from 'react'
import { 
  Table, 
  TableHead, 
  TableHeaderCell, 
  TableBody, 
  TableRow, 
  TableCell, 
  Badge,
  Text
} from '@tremor/react'

interface PartnersListProps {
  className?: string;
}

// Type pour les partenaires
interface Partner {
  id: number;
  name: string;
  location: string;
  country: string;
  lastOrder: {
    date: string;
    amount: number;
  };
  totalOrders: number;
  status: 'active' | 'inactive' | 'pending';
  performance: 'high' | 'medium' | 'low';
}

const PartnersList: React.FC<PartnersListProps> = ({ className }) => {
  // Données partenaires fictives
  const partners: Partner[] = [
    {
      id: 1,
      name: "Concept Store Bruxelles",
      location: "Bruxelles",
      country: "Belgique",
      lastOrder: {
        date: "28/03/2025",
        amount: 780
      },
      totalOrders: 4,
      status: "active",
      performance: "high"
    },
    {
      id: 2,
      name: "Maison Jolie",
      location: "Anvers",
      country: "Belgique",
      lastOrder: {
        date: "15/03/2025",
        amount: 450
      },
      totalOrders: 3,
      status: "active",
      performance: "medium"
    },
    {
      id: 3,
      name: "Boutique Éclectique",
      location: "Paris",
      country: "France",
      lastOrder: {
        date: "22/03/2025",
        amount: 920
      },
      totalOrders: 2,
      status: "active",
      performance: "high"
    },
    {
      id: 4,
      name: "L'Atelier des Créateurs",
      location: "Lyon",
      country: "France",
      lastOrder: {
        date: "05/03/2025",
        amount: 380
      },
      totalOrders: 1,
      status: "active",
      performance: "medium"
    },
    {
      id: 5,
      name: "Floral Design Shop",
      location: "Amsterdam",
      country: "Pays-Bas",
      lastOrder: {
        date: "18/03/2025",
        amount: 260
      },
      totalOrders: 1,
      status: "active",
      performance: "low"
    },
    {
      id: 6,
      name: "Naturel & Bio",
      location: "Luxembourg-ville",
      country: "Luxembourg",
      lastOrder: {
        date: "01/03/2025",
        amount: 210
      },
      totalOrders: 1,
      status: "active",
      performance: "low"
    }
  ]

  // Fonction pour rendre le badge de statut
  const renderStatusBadge = (status: Partner['status']) => {
    const statusConfig = {
      active: { color: 'green', label: 'Actif' },
      inactive: { color: 'red', label: 'Inactif' },
      pending: { color: 'yellow', label: 'En attente' }
    }
    const config = statusConfig[status]
    
    return (
      <Badge color={config.color as any}>{config.label}</Badge>
    )
  }

  // Fonction pour rendre le badge de performance
  const renderPerformanceBadge = (performance: Partner['performance']) => {
    const perfConfig = {
      high: { color: 'emerald', label: 'Élevée' },
      medium: { color: 'blue', label: 'Moyenne' },
      low: { color: 'amber', label: 'Faible' }
    }
    const config = perfConfig[performance]
    
    return (
      <Badge color={config.color as any}>{config.label}</Badge>
    )
  }

  return (
    <div className={className}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Partenaire</TableHeaderCell>
            <TableHeaderCell>Localisation</TableHeaderCell>
            <TableHeaderCell>Dernière commande</TableHeaderCell>
            <TableHeaderCell>Total commandes</TableHeaderCell>
            <TableHeaderCell>Statut</TableHeaderCell>
            <TableHeaderCell>Performance</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {partners.map((partner) => (
            <TableRow key={partner.id}>
              <TableCell>{partner.name}</TableCell>
              <TableCell>
                <Text>{partner.location}</Text>
                <Text className="text-gray-500">{partner.country}</Text>
              </TableCell>
              <TableCell>
                <Text>{partner.lastOrder.date}</Text>
                <Text className="text-gray-500">{partner.lastOrder.amount} €</Text>
              </TableCell>
              <TableCell>{partner.totalOrders}</TableCell>
              <TableCell>{renderStatusBadge(partner.status)}</TableCell>
              <TableCell>{renderPerformanceBadge(partner.performance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PartnersList
