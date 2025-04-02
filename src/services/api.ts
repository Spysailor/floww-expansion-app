/**
 * Service API pour gérer les appels réseau
 * Cette implémentation utilise des données fictives au lieu d'appels API réels
 */

// Simulation d'API avec des données mock
export const api = {
  // Fonction pour simuler un appel API avec des données prédéfinies
  fetch: async (endpoint: string) => {
    console.log(`Simulation d'appel API vers: ${endpoint}`);
    
    // Simuler un délai réseau réaliste
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Retourner des données fictives en fonction de l'endpoint
    switch (endpoint) {
      case '/api/dashboard/metrics':
        return mockDashboardMetrics;
      case '/api/partners/list':
        return mockPartners;
      case '/api/marketing/campaigns':
        return mockMarketingCampaigns;
      case '/api/logistics/shipments':
        return mockShipments;
      default:
        return { error: 'Endpoint non reconnu' };
    }
  },
  
  // Fonction pour simuler l'envoi de données vers l'API
  post: async (endpoint: string, data: any) => {
    console.log(`Simulation d'envoi de données vers: ${endpoint}`, data);
    
    // Simuler un délai réseau réaliste
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simuler une réponse de succès
    return { success: true, message: 'Opération simulée réussie' };
  }
};

// Données fictives pour le tableau de bord
const mockDashboardMetrics = {
  totalSales: 32600,
  b2cOrders: 126,
  b2bPartners: 6,
  shipments: 112,
  salesByCoutry: [
    { country: "Belgique", value: 18500 },
    { country: "France", value: 12300 },
    { country: "Pays-Bas", value: 850 },
    { country: "Luxembourg", value: 480 },
    { country: "Allemagne", value: 470 }
  ],
  marketingROI: [
    { canal: "Instagram Ads", ROI: 3.2 },
    { canal: "Facebook Ads", ROI: 2.8 },
    { canal: "Influence", ROI: 4.6 },
    { canal: "Email", ROI: 7.3 },
    { canal: "Pop-up stores", ROI: 2.1 }
  ]
};

// Données fictives pour les partenaires
const mockPartners = [
  {
    id: 1,
    name: "Concept Store Bruxelles",
    type: "concept-store",
    location: "Bruxelles",
    country: "Belgique",
    contactName: "Marie Dufour",
    contactEmail: "contact@conceptstore-bxl.be",
    contactPhone: "+32 2 123 45 67",
    status: "actif",
    lastOrder: {
      date: "28/03/2025",
      amount: 780
    }
  },
  {
    id: 2,
    name: "Maison Jolie",
    type: "concept-store",
    location: "Anvers",
    country: "Belgique",
    contactName: "Johan Peeters",
    contactEmail: "info@maisonjolie.be",
    contactPhone: "+32 3 765 43 21",
    status: "actif",
    lastOrder: {
      date: "15/03/2025",
      amount: 450
    }
  },
  {
    id: 3,
    name: "Boutique Éclectique",
    type: "concept-store",
    location: "Paris",
    country: "France",
    contactName: "Claire Martin",
    contactEmail: "claire@boutique-eclectique.fr",
    contactPhone: "+33 1 42 33 44 55",
    status: "actif",
    lastOrder: {
      date: "22/03/2025",
      amount: 920
    }
  }
];

// Données fictives pour les campagnes marketing
const mockMarketingCampaigns = [
  {
    id: 1,
    name: "Lancement Collection Printemps",
    platform: "Instagram",
    startDate: "01/03/2025",
    endDate: "15/04/2025",
    budget: 600,
    spent: 450,
    status: "active",
    kpis: {
      reach: 28000,
      clicks: 920,
      conversions: 46,
      revenue: 1610
    }
  },
  {
    id: 2,
    name: "Partenariat Influenceuse BE",
    platform: "Instagram",
    startDate: "15/03/2025",
    endDate: "15/04/2025",
    budget: 300,
    spent: 300,
    status: "active",
    kpis: {
      reach: 15600,
      clicks: 620,
      conversions: 31,
      revenue: 1085
    }
  }
];

// Données fictives pour les expéditions
const mockShipments = [
  {
    id: "SHP-2503-1",
    orderId: "ORD-2503-145",
    orderType: "B2C",
    destination: {
      country: "Belgique",
      city: "Bruxelles",
      postalCode: "1000"
    },
    courier: "DHL Express",
    trackingNumber: "DHL9283748374",
    status: "delivered",
    dateCreated: "25/03/2025",
    dateShipped: "26/03/2025",
    dateDelivered: "28/03/2025",
    lastUpdate: "28/03/2025",
    details: {
      items: 1,
      weight: 0.2,
      value: 38
    },
    customsInfo: {
      declarationNumber: "BE1234567",
      taxesPaid: 8.0,
      clearanceDate: "27/03/2025"
    },
    recipient: "Amélie Dubois"
  },
  {
    id: "SHP-2703-1",
    orderId: "ORD-2703-148",
    orderType: "B2C",
    destination: {
      country: "France",
      city: "Paris",
      postalCode: "75005"
    },
    courier: "DHL Express",
    trackingNumber: "DHL9283748375",
    status: "transit",
    dateCreated: "27/03/2025",
    dateShipped: "28/03/2025",
    lastUpdate: "29/03/2025",
    details: {
      items: 2,
      weight: 0.3,
      value: 72
    },
    customsInfo: {
      declarationNumber: "FR7654321",
      taxesPaid: 14.4,
      clearanceDate: "29/03/2025"
    },
    recipient: "Claire Martin"
  }
];

export default api;
