function FormField({
  as = 'input',
  label,
  name,
  error,
  className = '',
  options = [],
  ...props
}) {
  const Component = as

  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-text-main">{label}</span>
      {as === 'select' ? (
        <select
          className={`input-field ${error ? 'border-error focus:ring-error/10' : ''} ${className}`.trim()}
          name={name}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Component
          className={`input-field ${error ? 'border-error focus:ring-error/10' : ''} ${className}`.trim()}
          name={name}
          {...props}
        />
      )}
      {error ? <span className="text-sm text-error">{error}</span> : null}
    </label>
  )
}

export default FormField
