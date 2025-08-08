import { useState } from 'react'
import TabNavigation from './components/TabNavigation'
import WorldMap from './components/WorldMap'

const CONTINENTS = ['World', 'Africa', 'Asia', 'Europe', 'Middle East', 'North America', 'South America', 'Oceania', 'Antarctica']

function App() {
  const [activeTab, setActiveTab] = useState('World')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Global Info</h1>
            <p className="text-sm text-gray-500">Learn about our world</p>
          </div>
        </div>
      </header>

      <TabNavigation 
        tabs={CONTINENTS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WorldMap continent={activeTab} />
      </main>
    </div>
  )
}

export default App