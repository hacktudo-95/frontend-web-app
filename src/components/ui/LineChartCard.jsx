const TOM_CLASS = {
  roxo: {
    stroke: 'stroke-brand-purple',
    fill: 'fill-brand-purple',
    dot: 'bg-brand-purple',
    text: 'text-brand-purple',
  },
  laranja: {
    stroke: 'stroke-state-thinking',
    fill: 'fill-state-thinking',
    dot: 'bg-state-thinking',
    text: 'text-state-thinking',
  },
  verde: {
    stroke: 'stroke-success-green',
    fill: 'fill-success-green',
    dot: 'bg-success-green',
    text: 'text-success-green-text',
  },
}

const WIDTH = 300
const HEIGHT = 90
const PADDING = 8

function toPoints(valores) {
  const step = (WIDTH - PADDING * 2) / (valores.length - 1)
  return valores.map((valor, index) => ({
    x: PADDING + index * step,
    y: PADDING + (1 - valor / 100) * (HEIGHT - PADDING * 2),
  }))
}

export function LineChartCard({ titulo, tagTexto, tagTom = 'roxo', xLabels, series }) {
  const mostrarLegenda = series.length > 1

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-text-dark">{titulo}</h2>
        <span className={`text-xs font-semibold ${TOM_CLASS[tagTom].text}`}>{tagTexto}</span>
      </div>

      {mostrarLegenda && (
        <div className="mb-2 flex flex-wrap gap-3">
          {series.map((serie) => (
            <span key={serie.id} className="flex items-center gap-1.5 text-xs text-text-gray-2">
              <span className={`h-2 w-2 rounded-full ${TOM_CLASS[serie.tom].dot}`} />
              {serie.label}
            </span>
          ))}
        </div>
      )}

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label={titulo}>
        <line
          x1={PADDING}
          y1={HEIGHT - PADDING}
          x2={WIDTH - PADDING}
          y2={HEIGHT - PADDING}
          className="stroke-brand-lilac"
          strokeWidth="1"
        />
        {series.map((serie) => {
          const pontos = toPoints(serie.valores)
          const tom = TOM_CLASS[serie.tom]
          return (
            <g key={serie.id}>
              <polyline
                points={pontos.map((p) => `${p.x},${p.y}`).join(' ')}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={tom.stroke}
              />
              {pontos.map((p, index) => (
                <circle key={index} cx={p.x} cy={p.y} r="3" className={tom.fill} />
              ))}
            </g>
          )
        })}
      </svg>

      <div className="flex justify-between text-xs text-text-gray-2">
        {xLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  )
}
