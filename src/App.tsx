import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { Shield, FolderOpen, Search, AlertTriangle } from 'lucide-react';
import {
  GuardianOverviewPage,
  AssetVaultPage,
  HunterPage,
  WarRoomPage
} from './ecommerce-platform/pages/image-guardian';
import './index.css';

const navigation = [
  { name: '總覽', href: '/', icon: Shield },
  { name: '資產庫', href: '/vault', icon: FolderOpen },
  { name: '搜尋偵測', href: '/hunter', icon: Search },
  { name: '戰情室', href: '/warroom', icon: AlertTriangle },
];

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">AI Automatic Reporting System</h1>
                <p className="text-xs text-gray-500">AI 自動檢舉系統</p>
              </div>
            </div>
            <nav className="flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 AI Automatic Reporting System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GuardianOverviewPage />} />
          <Route path="/vault" element={<AssetVaultPage />} />
          <Route path="/hunter" element={<HunterPage />} />
          <Route path="/warroom" element={<WarRoomPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
