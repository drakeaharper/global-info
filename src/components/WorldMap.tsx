import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { getCountriesByContinent, getCountryById } from '../data/countries'
import Tooltip from './Tooltip'
import type { TooltipData } from '../types/country'

interface WorldMapProps {
  continent: string
}

// World map topology URL (Natural Earth data)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Map ISO codes to our country IDs
const countryMapping: Record<string, string> = {
  // North America
  '840': 'US',   // United States
  '124': 'CA',   // Canada
  '484': 'MX',   // Mexico
  '320': 'GT',   // Guatemala
  '192': 'CU',   // Cuba
  '332': 'HT',   // Haiti
  '214': 'DO',   // Dominican Republic
  '340': 'HN',   // Honduras
  '558': 'NI',   // Nicaragua
  '188': 'CR',   // Costa Rica
  '591': 'PA',   // Panama

  // Europe
  '643': 'RU',   // Russia
  '276': 'DE',   // Germany
  '792': 'TR',   // Turkey
  '826': 'GB',   // United Kingdom
  '250': 'FR',   // France
  '380': 'IT',   // Italy
  '724': 'ES',   // Spain
  '804': 'UA',   // Ukraine
  '616': 'PL',   // Poland
  '642': 'RO',   // Romania
  '528': 'NL',   // Netherlands
  '056': 'BE',   // Belgium
  '203': 'CZ',   // Czech Republic
  '300': 'GR',   // Greece
  '620': 'PT',   // Portugal
  '752': 'SE',   // Sweden
  '348': 'HU',   // Hungary
  '112': 'BY',   // Belarus
  '040': 'AT',   // Austria
  '756': 'CH',   // Switzerland
  '100': 'BG',   // Bulgaria
  '688': 'RS',   // Serbia
  '208': 'DK',   // Denmark
  '246': 'FI',   // Finland
  '703': 'SK',   // Slovakia
  '578': 'NO',   // Norway
  '372': 'IE',   // Ireland
  '191': 'HR',   // Croatia
  '070': 'BA',   // Bosnia and Herzegovina
  '008': 'AL',   // Albania
  '440': 'LT',   // Lithuania
  '705': 'SI',   // Slovenia
  '428': 'LV',   // Latvia
  '233': 'EE',   // Estonia

  // Asia
  '156': 'CN',   // China
  '356': 'IN',   // India
  '360': 'ID',   // Indonesia
  '586': 'PK',   // Pakistan
  '050': 'BD',   // Bangladesh
  '392': 'JP',   // Japan
  '608': 'PH',   // Philippines
  '704': 'VN',   // Vietnam
  '364': 'IR',   // Iran
  '764': 'TH',   // Thailand
  '104': 'MM',   // Myanmar
  '410': 'KR',   // South Korea
  '368': 'IQ',   // Iraq
  '004': 'AF',   // Afghanistan
  '682': 'SA',   // Saudi Arabia
  '860': 'UZ',   // Uzbekistan
  '458': 'MY',   // Malaysia
  '524': 'NP',   // Nepal
  '887': 'YE',   // Yemen
  '408': 'KP',   // North Korea
  '144': 'LK',   // Sri Lanka
  '398': 'KZ',   // Kazakhstan
  '760': 'SY',   // Syria
  '116': 'KH',   // Cambodia
  '400': 'JO',   // Jordan
  '031': 'AZ',   // Azerbaijan
  '784': 'AE',   // United Arab Emirates
  '762': 'TJ',   // Tajikistan
  '376': 'IL',   // Israel
  '418': 'LA',   // Laos
  '702': 'SG',   // Singapore
  '417': 'KG',   // Kyrgyzstan
  '795': 'TM',   // Turkmenistan
  '268': 'GE',   // Georgia
  '496': 'MN',   // Mongolia
  '051': 'AM',   // Armenia
  '414': 'KW',   // Kuwait
  '634': 'QA',   // Qatar
  '048': 'BH',   // Bahrain
  '064': 'BT',   // Bhutan
  '462': 'MV',   // Maldives
  '096': 'BN',   // Brunei

  // Africa
  '566': 'NG',   // Nigeria
  '231': 'ET',   // Ethiopia
  '818': 'EG',   // Egypt
  '710': 'ZA',   // South Africa
  '404': 'KE',   // Kenya
  '800': 'UG',   // Uganda
  '012': 'DZ',   // Algeria
  '729': 'SD',   // Sudan
  '504': 'MA',   // Morocco
  '024': 'AO',   // Angola
  '288': 'GH',   // Ghana
  '508': 'MZ',   // Mozambique
  '450': 'MG',   // Madagascar
  '120': 'CM',   // Cameroon
  '384': 'CI',   // Ivory Coast
  '562': 'NE',   // Niger
  '854': 'BF',   // Burkina Faso
  '466': 'ML',   // Mali
  '454': 'MW',   // Malawi
  '894': 'ZM',   // Zambia
  '686': 'SN',   // Senegal
  '706': 'SO',   // Somalia
  '148': 'TD',   // Chad
  '716': 'ZW',   // Zimbabwe
  '324': 'GN',   // Guinea
  '646': 'RW',   // Rwanda
  '204': 'BJ',   // Benin
  '788': 'TN',   // Tunisia
  '108': 'BI',   // Burundi
  '728': 'SS',   // South Sudan
  '768': 'TG',   // Togo
  '694': 'SL',   // Sierra Leone
  '434': 'LY',   // Libya
  '430': 'LR',   // Liberia
  '478': 'MR',   // Mauritania
  '232': 'ER',   // Eritrea
  '270': 'GM',   // Gambia
  '072': 'BW',   // Botswana
  '266': 'GA',   // Gabon
  '426': 'LS',   // Lesotho
  '624': 'GW',   // Guinea-Bissau
  '226': 'GQ',   // Equatorial Guinea
  '480': 'MU',   // Mauritius
  '748': 'SZ',   // Eswatini
  '262': 'DJ',   // Djibouti
  '132': 'CV',   // Cape Verde
  '678': 'ST',   // São Tomé and Príncipe
  '690': 'SC',   // Seychelles

  // South America
  '076': 'BR',   // Brazil
  '170': 'CO',   // Colombia
  '032': 'AR',   // Argentina
  '604': 'PE',   // Peru
  '862': 'VE',   // Venezuela
  '152': 'CL',   // Chile
  '218': 'EC',   // Ecuador
  '068': 'BO',   // Bolivia
  '600': 'PY',   // Paraguay
  '858': 'UY',   // Uruguay
  '328': 'GY',   // Guyana
  '740': 'SR',   // Suriname

  // Oceania
  '036': 'AU',   // Australia
  '598': 'PG',   // Papua New Guinea
  '554': 'NZ',   // New Zealand
  '242': 'FJ',   // Fiji
  '090': 'SB',   // Solomon Islands
  '548': 'VU',   // Vanuatu
  '882': 'WS',   // Samoa
  '296': 'KI',   // Kiribati
  '776': 'TO',   // Tonga
  '585': 'PW',   // Palau
  '520': 'NR',   // Nauru
  '798': 'TV',   // Tuvalu

  // Antarctica
  '010': 'AQ',   // Antarctica

  // Missing Territories
  '304': 'GL',   // Greenland
  '630': 'PR',   // Puerto Rico
  '254': 'GF',   // French Guiana
  '238': 'FK',   // Falkland Islands
  '580': 'MP',   // Northern Mariana Islands
  '316': 'GU',   // Guam
  '850': 'VI',   // US Virgin Islands
  '092': 'VG',   // British Virgin Islands
  '660': 'AI',   // Anguilla
  '666': 'PM',   // Saint Pierre and Miquelon
  '162': 'CX',   // Christmas Island
  '166': 'CC',   // Cocos Islands
  '574': 'NF',   // Norfolk Island
  '334': 'HM',   // Heard & McDonald Islands
}

// Continent-specific map configurations
const continentConfigs = {
  'World': {
    scale: 150,
    center: [0, 0] as [number, number],
  },
  'North America': {
    scale: 300,
    center: [-100, 50] as [number, number],
  },
  'South America': {
    scale: 300,
    center: [-60, -15] as [number, number],
  },
  'Europe': {
    scale: 450,
    center: [10, 55] as [number, number],
  },
  'Middle East': {
    scale: 500,
    center: [50, 30] as [number, number],
  },
  'Africa': {
    scale: 300,
    center: [20, 0] as [number, number],
  },
  'Asia': {
    scale: 250,
    center: [100, 35] as [number, number],
  },
  'Oceania': {
    scale: 450,
    center: [140, -25] as [number, number],
  },
  'Antarctica': {
    scale: 300,
    center: [0, -85] as [number, number],
  },
}

const WorldMap = ({ continent }: WorldMapProps) => {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = getCountriesByContinent(continent)
  const availableCountryIds = countries.map(c => c.id)
  
  // Get configuration for current continent
  const mapConfig = continentConfigs[continent as keyof typeof continentConfigs] || continentConfigs['World']

  const handleCountryEnter = (geo: any, event: React.MouseEvent) => {
    const countryId = countryMapping[geo.id]
    const country = getCountryById(countryId)
    
    if (country && availableCountryIds.includes(countryId)) {
      setHoveredCountry(countryId)
      setTooltip({
        country,
        x: event.clientX,
        y: event.clientY,
      })
    }
  }

  const handleCountryLeave = () => {
    setHoveredCountry(null)
    setTooltip(null)
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip && hoveredCountry) {
      const currentCountry = getCountryById(hoveredCountry)
      
      if (currentCountry) {
        setTooltip({
          country: currentCountry,
          x: event.clientX,
          y: event.clientY,
        })
      }
    }
  }

  const getCountryFill = (geo: any) => {
    const countryId = countryMapping[geo.id]
    const isAvailable = countryId && availableCountryIds.includes(countryId)
    const isHovered = (countryId === hoveredCountry) || (geo.id === hoveredCountry)
    
    if (!isAvailable) {
      if (isHovered) return '#9ca3af'   // Darker gray on hover
      return '#e5e7eb'                  // Light gray for countries without data
    }
    if (isHovered) return '#1e40af'     // Dark blue on hover
    return '#22c55e'                    // Green for available countries
  }

  return (
    <div className="relative w-full">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {continent === 'World' ? 'World Map' : `${continent} Map`}
        </h2>
        
        <div 
          className="w-full bg-blue-50 rounded-lg overflow-hidden"
          onMouseMove={(e) => {
            const target = e.target as any
            // If mouse is over ocean/background (not a path element), clear tooltip
            if (target.tagName !== 'path') {
              setHoveredCountry(null)
              setTooltip(null)
            } else {
              handleMouseMove(e)
            }
          }}
          onMouseLeave={() => {
            setHoveredCountry(null)
            setTooltip(null)
          }}
        >
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{
              scale: mapConfig.scale,
              center: mapConfig.center,
            }}
            width={1000}
            height={500}
            style={{
              width: '100%',
              height: 'auto',
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryId = countryMapping[geo.id]
                  const isAvailable = countryId && availableCountryIds.includes(countryId)
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryFill(geo)}
                      stroke="#374151"
                      strokeWidth={0.5}
                      style={{
                        default: {
                          outline: 'none',
                        },
                        hover: {
                          outline: 'none',
                          cursor: isAvailable ? 'pointer' : 'default',
                        },
                        pressed: {
                          outline: 'none',
                        },
                      }}
                      onMouseEnter={(e) => {
                        if (isAvailable) {
                          handleCountryEnter(geo, e)
                        } else if (geo.properties) {
                          // Try different common property names for country name
                          const countryName = geo.properties.NAME || geo.properties.NAME_EN || geo.properties.ADMIN || geo.properties.name || 'Unknown Country'
                          
                          // Log Greenland specifically to find its ISO code
                          if (countryName.toLowerCase().includes('greenland')) {
                            console.log('Greenland found:', {id: geo.id, name: countryName, properties: geo.properties})
                          }
                          
                          // Show just country name for grey countries
                          setHoveredCountry(geo.id)
                          setTooltip({
                            country: {
                              id: geo.id,
                              name: countryName,
                              population: 0, // Will show "Population data not available"
                              continent: 'Unknown'
                            },
                            x: e.clientX,
                            y: e.clientY,
                          })
                        } else {
                          // Clear tooltip for countries without any data
                          setHoveredCountry(null)
                          setTooltip(null)
                        }
                      }}
                      onMouseLeave={handleCountryLeave}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Countries in {continent}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country) => (
              <div
                key={country.id}
                className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                onMouseEnter={(e) => {
                  setHoveredCountry(country.id)
                  setTooltip({
                    country,
                    x: e.clientX,
                    y: e.clientY,
                  })
                }}
                onMouseLeave={handleCountryLeave}
              >
                <div className="font-medium text-gray-900">{country.name}</div>
                <div className="text-sm text-gray-600">
                  Population: {country.population.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Tooltip tooltip={tooltip} />
    </div>
  )
}

export default WorldMap