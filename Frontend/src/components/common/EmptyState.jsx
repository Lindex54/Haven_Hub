import Button from './Button'

function EmptyState({ title, description, actionLabel, actionTo = '/' }) {
  return (
    <div className="card mx-auto max-w-2xl text-center">
      <div className="space-y-4">
        <h2 className="text-card-title leading-card-title tracking-card-title font-bold text-text-main">
          {title}
        </h2>
        <p className="muted-text">{description}</p>
      </div>
      <div className="mt-6">
        <Button to={actionTo}>{actionLabel}</Button>
      </div>
    </div>
  )
}

export default EmptyState
