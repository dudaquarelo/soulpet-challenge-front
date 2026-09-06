interface RewardCardProps {
  emoji: string
  name: string
  description?: string
  points: number
  badge?: string
  note?: string
  buttonLabel?: string
}

const RewardCard = ({
  emoji,
  name,
  description,
  points,
  badge,
  note,
  buttonLabel,
}: RewardCardProps) => {
  return (
    <article className="relative rounded-2xl border border-border-soft bg-white p-6 text-center shadow-sm transition hover:shadow-md">
      {badge && (
        <span className="absolute right-3 top-3 rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      )}

      <span className="text-4xl">{emoji}</span>
      <div className="mt-2 font-display font-bold text-text-dark">{name}</div>
      {description && (
        <div className="mt-1 text-sm text-text-body">{description}</div>
      )}

      <div className="mt-3 font-display text-lg font-bold text-primary">{points} pts</div>
      {note && <span className="mt-1 block text-xs text-text-muted">{note}</span>}

      {buttonLabel && (
        <button className="mt-4 w-full rounded-full bg-primary py-2 font-semibold text-white hover:bg-secondary">
          {buttonLabel}
        </button>
      )}
    </article>
  )
}

export default RewardCard