import { formatPopulation } from '../data/countries'
import type { TooltipData } from '../types/country'

interface TooltipProps {
  tooltip: TooltipData | null
}

const Tooltip = ({ tooltip }: TooltipProps) => {
  if (!tooltip) return null

  return (
    <div
      className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg pointer-events-none"
      style={{
        left: tooltip.x + 10,
        top: tooltip.y - 40,
      }}
    >
      <div className="font-semibold">{tooltip.country.name}</div>
      {tooltip.country.population > 0 && (
        <div className="text-sm text-gray-300">
          Population: {formatPopulation(tooltip.country.population)}
        </div>
      )}
    </div>
  )
}

export default Tooltip