import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight size={14} aria-hidden="true" /> : null}
            {item.path ? (
              <Link className="transition hover:text-primary" to={item.path}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-text-main">
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
