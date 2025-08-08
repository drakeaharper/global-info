import type { Country } from '../types/country'

export const countries: Country[] = [
  // North America
  { id: 'US', name: 'United States', population: 331900000, continent: 'North America' },
  { id: 'CA', name: 'Canada', population: 38000000, continent: 'North America' },
  { id: 'MX', name: 'Mexico', population: 128900000, continent: 'North America' },
  { id: 'GT', name: 'Guatemala', population: 17900000, continent: 'North America' },
  { id: 'CU', name: 'Cuba', population: 11300000, continent: 'North America' },
  { id: 'HT', name: 'Haiti', population: 11400000, continent: 'North America' },
  { id: 'DO', name: 'Dominican Republic', population: 10800000, continent: 'North America' },
  { id: 'HN', name: 'Honduras', population: 10000000, continent: 'North America' },
  { id: 'NI', name: 'Nicaragua', population: 6600000, continent: 'North America' },
  { id: 'CR', name: 'Costa Rica', population: 5100000, continent: 'North America' },
  { id: 'PA', name: 'Panama', population: 4300000, continent: 'North America' },

  // Europe
  { id: 'RU', name: 'Russia', population: 146200000, continent: 'Europe' },
  { id: 'DE', name: 'Germany', population: 83200000, continent: 'Europe' },
  { id: 'TR', name: 'Turkey', population: 84300000, continent: 'Europe' },
  { id: 'GB', name: 'United Kingdom', population: 67500000, continent: 'Europe' },
  { id: 'FR', name: 'France', population: 67400000, continent: 'Europe' },
  { id: 'IT', name: 'Italy', population: 59100000, continent: 'Europe' },
  { id: 'ES', name: 'Spain', population: 47400000, continent: 'Europe' },
  { id: 'UA', name: 'Ukraine', population: 43700000, continent: 'Europe' },
  { id: 'PL', name: 'Poland', population: 37800000, continent: 'Europe' },
  { id: 'RO', name: 'Romania', population: 19200000, continent: 'Europe' },
  { id: 'NL', name: 'Netherlands', population: 17400000, continent: 'Europe' },
  { id: 'BE', name: 'Belgium', population: 11600000, continent: 'Europe' },
  { id: 'CZ', name: 'Czech Republic', population: 10700000, continent: 'Europe' },
  { id: 'GR', name: 'Greece', population: 10400000, continent: 'Europe' },
  { id: 'PT', name: 'Portugal', population: 10300000, continent: 'Europe' },
  { id: 'SE', name: 'Sweden', population: 10400000, continent: 'Europe' },
  { id: 'HU', name: 'Hungary', population: 9700000, continent: 'Europe' },
  { id: 'BY', name: 'Belarus', population: 9400000, continent: 'Europe' },
  { id: 'AT', name: 'Austria', population: 9000000, continent: 'Europe' },
  { id: 'CH', name: 'Switzerland', population: 8700000, continent: 'Europe' },
  { id: 'BG', name: 'Bulgaria', population: 6900000, continent: 'Europe' },
  { id: 'RS', name: 'Serbia', population: 6800000, continent: 'Europe' },
  { id: 'DK', name: 'Denmark', population: 5800000, continent: 'Europe' },
  { id: 'FI', name: 'Finland', population: 5500000, continent: 'Europe' },
  { id: 'SK', name: 'Slovakia', population: 5500000, continent: 'Europe' },
  { id: 'NO', name: 'Norway', population: 5400000, continent: 'Europe' },
  { id: 'IE', name: 'Ireland', population: 5000000, continent: 'Europe' },
  { id: 'HR', name: 'Croatia', population: 3900000, continent: 'Europe' },
  { id: 'BA', name: 'Bosnia and Herzegovina', population: 3300000, continent: 'Europe' },
  { id: 'AL', name: 'Albania', population: 2800000, continent: 'Europe' },
  { id: 'LT', name: 'Lithuania', population: 2700000, continent: 'Europe' },
  { id: 'SI', name: 'Slovenia', population: 2100000, continent: 'Europe' },
  { id: 'LV', name: 'Latvia', population: 1900000, continent: 'Europe' },
  { id: 'EE', name: 'Estonia', population: 1300000, continent: 'Europe' },

  // Asia
  { id: 'CN', name: 'China', population: 1439000000, continent: 'Asia' },
  { id: 'IN', name: 'India', population: 1380000000, continent: 'Asia' },
  { id: 'ID', name: 'Indonesia', population: 273500000, continent: 'Asia' },
  { id: 'PK', name: 'Pakistan', population: 220900000, continent: 'Asia' },
  { id: 'BD', name: 'Bangladesh', population: 164700000, continent: 'Asia' },
  { id: 'JP', name: 'Japan', population: 125800000, continent: 'Asia' },
  { id: 'PH', name: 'Philippines', population: 109600000, continent: 'Asia' },
  { id: 'VN', name: 'Vietnam', population: 97300000, continent: 'Asia' },
  { id: 'IR', name: 'Iran', population: 83900000, continent: 'Middle East' },
  { id: 'TH', name: 'Thailand', population: 69800000, continent: 'Asia' },
  { id: 'MM', name: 'Myanmar', population: 54400000, continent: 'Asia' },
  { id: 'KR', name: 'South Korea', population: 51800000, continent: 'Asia' },
  { id: 'IQ', name: 'Iraq', population: 40200000, continent: 'Middle East' },
  { id: 'AF', name: 'Afghanistan', population: 38900000, continent: 'Middle East' },
  { id: 'SA', name: 'Saudi Arabia', population: 34800000, continent: 'Middle East' },
  { id: 'UZ', name: 'Uzbekistan', population: 33500000, continent: 'Asia' },
  { id: 'MY', name: 'Malaysia', population: 32400000, continent: 'Asia' },
  { id: 'NP', name: 'Nepal', population: 29100000, continent: 'Asia' },
  { id: 'YE', name: 'Yemen', population: 29800000, continent: 'Middle East' },
  { id: 'KP', name: 'North Korea', population: 25800000, continent: 'Asia' },
  { id: 'LK', name: 'Sri Lanka', population: 21900000, continent: 'Asia' },
  { id: 'KZ', name: 'Kazakhstan', population: 18800000, continent: 'Asia' },
  { id: 'SY', name: 'Syria', population: 17500000, continent: 'Middle East' },
  { id: 'KH', name: 'Cambodia', population: 16700000, continent: 'Asia' },
  { id: 'JO', name: 'Jordan', population: 10200000, continent: 'Middle East' },
  { id: 'AZ', name: 'Azerbaijan', population: 10100000, continent: 'Middle East' },
  { id: 'AE', name: 'United Arab Emirates', population: 9900000, continent: 'Middle East' },
  { id: 'TJ', name: 'Tajikistan', population: 9500000, continent: 'Asia' },
  { id: 'IL', name: 'Israel', population: 9400000, continent: 'Middle East' },
  { id: 'LA', name: 'Laos', population: 7300000, continent: 'Asia' },
  { id: 'SG', name: 'Singapore', population: 5900000, continent: 'Asia' },
  { id: 'KG', name: 'Kyrgyzstan', population: 6500000, continent: 'Asia' },
  { id: 'TM', name: 'Turkmenistan', population: 6000000, continent: 'Asia' },
  { id: 'GE', name: 'Georgia', population: 3700000, continent: 'Asia' },
  { id: 'MN', name: 'Mongolia', population: 3200000, continent: 'Asia' },
  { id: 'AM', name: 'Armenia', population: 3000000, continent: 'Middle East' },
  { id: 'KW', name: 'Kuwait', population: 4300000, continent: 'Middle East' },
  { id: 'QA', name: 'Qatar', population: 2900000, continent: 'Middle East' },
  { id: 'BH', name: 'Bahrain', population: 1700000, continent: 'Middle East' },
  { id: 'BT', name: 'Bhutan', population: 800000, continent: 'Asia' },
  { id: 'MV', name: 'Maldives', population: 500000, continent: 'Asia' },
  { id: 'BN', name: 'Brunei', population: 400000, continent: 'Asia' },

  // Africa
  { id: 'NG', name: 'Nigeria', population: 206100000, continent: 'Africa' },
  { id: 'ET', name: 'Ethiopia', population: 115000000, continent: 'Africa' },
  { id: 'EG', name: 'Egypt', population: 102300000, continent: 'Africa' },
  { id: 'ZA', name: 'South Africa', population: 59300000, continent: 'Africa' },
  { id: 'KE', name: 'Kenya', population: 53800000, continent: 'Africa' },
  { id: 'UG', name: 'Uganda', population: 45700000, continent: 'Africa' },
  { id: 'DZ', name: 'Algeria', population: 43900000, continent: 'Africa' },
  { id: 'SD', name: 'Sudan', population: 43800000, continent: 'Africa' },
  { id: 'MA', name: 'Morocco', population: 36900000, continent: 'Africa' },
  { id: 'AO', name: 'Angola', population: 32900000, continent: 'Africa' },
  { id: 'GH', name: 'Ghana', population: 31100000, continent: 'Africa' },
  { id: 'MZ', name: 'Mozambique', population: 31300000, continent: 'Africa' },
  { id: 'MG', name: 'Madagascar', population: 27700000, continent: 'Africa' },
  { id: 'CM', name: 'Cameroon', population: 26500000, continent: 'Africa' },
  { id: 'CI', name: 'Ivory Coast', population: 26400000, continent: 'Africa' },
  { id: 'NE', name: 'Niger', population: 24200000, continent: 'Africa' },
  { id: 'BF', name: 'Burkina Faso', population: 20900000, continent: 'Africa' },
  { id: 'ML', name: 'Mali', population: 20300000, continent: 'Africa' },
  { id: 'MW', name: 'Malawi', population: 19100000, continent: 'Africa' },
  { id: 'ZM', name: 'Zambia', population: 18400000, continent: 'Africa' },
  { id: 'SN', name: 'Senegal', population: 16700000, continent: 'Africa' },
  { id: 'SO', name: 'Somalia', population: 15900000, continent: 'Africa' },
  { id: 'TD', name: 'Chad', population: 16400000, continent: 'Africa' },
  { id: 'ZW', name: 'Zimbabwe', population: 14900000, continent: 'Africa' },
  { id: 'GN', name: 'Guinea', population: 13100000, continent: 'Africa' },
  { id: 'RW', name: 'Rwanda', population: 12900000, continent: 'Africa' },
  { id: 'BJ', name: 'Benin', population: 12100000, continent: 'Africa' },
  { id: 'TN', name: 'Tunisia', population: 11800000, continent: 'Africa' },
  { id: 'BI', name: 'Burundi', population: 11900000, continent: 'Africa' },
  { id: 'SS', name: 'South Sudan', population: 11200000, continent: 'Africa' },
  { id: 'TG', name: 'Togo', population: 8300000, continent: 'Africa' },
  { id: 'SL', name: 'Sierra Leone', population: 8000000, continent: 'Africa' },
  { id: 'LY', name: 'Libya', population: 6900000, continent: 'Africa' },
  { id: 'LR', name: 'Liberia', population: 5100000, continent: 'Africa' },
  { id: 'MR', name: 'Mauritania', population: 4600000, continent: 'Africa' },
  { id: 'ER', name: 'Eritrea', population: 3500000, continent: 'Africa' },
  { id: 'GM', name: 'Gambia', population: 2400000, continent: 'Africa' },
  { id: 'BW', name: 'Botswana', population: 2300000, continent: 'Africa' },
  { id: 'GA', name: 'Gabon', population: 2200000, continent: 'Africa' },
  { id: 'LS', name: 'Lesotho', population: 2100000, continent: 'Africa' },
  { id: 'GW', name: 'Guinea-Bissau', population: 2000000, continent: 'Africa' },
  { id: 'GQ', name: 'Equatorial Guinea', population: 1400000, continent: 'Africa' },
  { id: 'MU', name: 'Mauritius', population: 1300000, continent: 'Africa' },
  { id: 'SZ', name: 'Eswatini', population: 1200000, continent: 'Africa' },
  { id: 'DJ', name: 'Djibouti', population: 1000000, continent: 'Africa' },
  { id: 'CV', name: 'Cape Verde', population: 600000, continent: 'Africa' },
  { id: 'ST', name: 'São Tomé and Príncipe', population: 200000, continent: 'Africa' },
  { id: 'SC', name: 'Seychelles', population: 100000, continent: 'Africa' },

  // South America
  { id: 'BR', name: 'Brazil', population: 212600000, continent: 'South America' },
  { id: 'CO', name: 'Colombia', population: 50900000, continent: 'South America' },
  { id: 'AR', name: 'Argentina', population: 45200000, continent: 'South America' },
  { id: 'PE', name: 'Peru', population: 33000000, continent: 'South America' },
  { id: 'VE', name: 'Venezuela', population: 28400000, continent: 'South America' },
  { id: 'CL', name: 'Chile', population: 19100000, continent: 'South America' },
  { id: 'EC', name: 'Ecuador', population: 17600000, continent: 'South America' },
  { id: 'BO', name: 'Bolivia', population: 11700000, continent: 'South America' },
  { id: 'PY', name: 'Paraguay', population: 7100000, continent: 'South America' },
  { id: 'UY', name: 'Uruguay', population: 3500000, continent: 'South America' },
  { id: 'GY', name: 'Guyana', population: 800000, continent: 'South America' },
  { id: 'SR', name: 'Suriname', population: 600000, continent: 'South America' },

  // Oceania
  { id: 'AU', name: 'Australia', population: 25700000, continent: 'Oceania' },
  { id: 'PG', name: 'Papua New Guinea', population: 8900000, continent: 'Oceania' },
  { id: 'NZ', name: 'New Zealand', population: 5100000, continent: 'Oceania' },
  { id: 'FJ', name: 'Fiji', population: 900000, continent: 'Oceania' },
  { id: 'SB', name: 'Solomon Islands', population: 700000, continent: 'Oceania' },
  { id: 'VU', name: 'Vanuatu', population: 300000, continent: 'Oceania' },
  { id: 'WS', name: 'Samoa', population: 200000, continent: 'Oceania' },
  { id: 'KI', name: 'Kiribati', population: 120000, continent: 'Oceania' },
  { id: 'TO', name: 'Tonga', population: 100000, continent: 'Oceania' },
  { id: 'PW', name: 'Palau', population: 18000, continent: 'Oceania' },
  { id: 'NR', name: 'Nauru', population: 11000, continent: 'Oceania' },
  { id: 'TV', name: 'Tuvalu', population: 12000, continent: 'Oceania' },

  // Antarctica (research stations)
  { id: 'AQ', name: 'Antarctica', population: 5000, continent: 'Antarctica' },
]

export const getCountriesByContinent = (continent: string): Country[] => {
  if (continent === 'World') {
    return countries
  }
  return countries.filter(country => country.continent === continent)
}

export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id)
}

export const formatPopulation = (population: number): string => {
  if (population >= 1000000000) {
    return `${(population / 1000000000).toFixed(1)}B`
  } else if (population >= 1000000) {
    return `${(population / 1000000).toFixed(1)}M`
  } else if (population >= 1000) {
    return `${(population / 1000).toFixed(1)}K`
  }
  return population.toString()
}