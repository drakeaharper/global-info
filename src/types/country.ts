export interface Country {
  id: string
  name: string
  population: number
  continent: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface TooltipData {
  country: Country
  x: number
  y: number
}