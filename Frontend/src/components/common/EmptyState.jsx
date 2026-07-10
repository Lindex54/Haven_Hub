function EmptyState({ title, description }) {
  return (
    <div className="rounded-card border border-dashed border-border bg-surface/80 p-8 text-center">
      <h2 className="text-card-title font-semibold text-text-main">{title}</h2>
      <p className="mt-3 muted-text">{description}</p>
    </div>
  )
}

export default EmptyState
