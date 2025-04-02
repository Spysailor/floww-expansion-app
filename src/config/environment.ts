/**
 * Configuration de l'environnement avec gestion des clés API et options
 */

// Récupération des variables d'environnement
const ENV = {
  API_KEY: import.meta.env.VITE_API_KEY || 'fallback_key_for_development',
  API_BASE_URL: import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:3001',
  TREMOR_API_KEY: import.meta.env.VITE_TREMOR_API_KEY || 'fallback_key_for_development',
  USE_MOCK_DATA: true, // Toujours utiliser les données fictives pour le développement
  ENV: import.meta.env.MODE || 'development'
};

export default ENV;
