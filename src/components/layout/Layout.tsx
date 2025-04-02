import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  UsersIcon, 
  TruckIcon, 
  ChartBarIcon, 
  CurrencyEuroIcon,
  ShoppingBagIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

type LayoutProps = {
  children: React.ReactNode
}

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  
  const navigation: NavItem[] = [
    { name: 'Tableau de bord', path: '/', icon: <HomeIcon className="h-6 w-6" /> },
    { name: 'Partenaires B2B', path: '/partners', icon: <UsersIcon className="h-6 w-6" /> },
    { name: 'Marketing', path: '/marketing', icon: <ChartBarIcon className="h-6 w-6" /> },
    { name: 'Logistique', path: '/logistics', icon: <TruckIcon className="h-6 w-6" /> },
    { name: 'Finances', path: '/finance', icon: <CurrencyEuroIcon className="h-6 w-6" /> },
    { name: 'Ventes', path: '/sales', icon: <ShoppingBagIcon className="h-6 w-6" /> },
    { name: 'Paramètres', path: '/settings', icon: <Cog6ToothIcon className="h-6 w-6" /> },
  ]

  return (
    <div className="flex h-screen bg-floww-light">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </div>
      )}

      {/* Mobile sidebar */}
      <div className={`fixed inset-y-0 left-0 flex flex-col z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-floww-primary">Floww</span>
            <span className="ml-2 text-lg text-floww-secondary">Expansion</span>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {navigation.map((item) => (
              <li key={item.path} className="px-2 py-1">
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    location.pathname === item.path
                      ? 'bg-floww-primary bg-opacity-10 text-floww-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    className: `mr-3 h-5 w-5 ${
                      location.pathname === item.path
                        ? 'text-floww-primary'
                        : 'text-gray-500'
                    }`
                  })}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-floww-primary flex items-center justify-center text-white">
              F
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Floww Maurice</p>
              <p className="text-xs font-medium text-gray-500">Expansion UE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm h-16 flex items-center">
          <div className="flex-1 flex justify-between items-center px-4">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-500" />
            </button>
            <div className="flex items-center">
              <span className="ml-2 text-sm font-medium text-gray-700">
                {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
