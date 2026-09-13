export function ClassRankingRow({ posicao, turma, pontos, isMinhaSala }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl px-3 py-3 ${
        isMinhaSala ? 'border border-brand-purple/30 bg-brand-lilac/50' : ''
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="w-5 text-sm font-semibold text-text-gray-2">{posicao}º</span>
        <span className="text-sm font-medium text-text-dark">{turma}</span>
        {isMinhaSala && (
          <span className="rounded-full bg-brand-purple px-2 py-0.5 text-[11px] font-semibold text-white">
            Sua sala
          </span>
        )}
      </div>
      <span className="text-sm font-semibold text-text-dark">{pontos} pts</span>
    </div>
  )
}
