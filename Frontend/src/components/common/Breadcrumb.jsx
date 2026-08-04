import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Breadcrumb({ items = [], inverse = false }) {
  const mutedColor = inverse ? 'text-white/65' : 'text-text-muted'
  const currentColor = inverse ? 'text-white' : 'text-text-main'
  const hoverColor = inverse ? 'hover:text-white' : 'hover:text-primary'

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${mutedColor}`}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight size={14} aria-hidden="true" /> : null}
            {item.path ? (
              <Link className={`transition ${hoverColor}`} to={item.path}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={currentColor}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
