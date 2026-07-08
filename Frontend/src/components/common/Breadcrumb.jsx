import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-small leading-small text-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label} className="inline-flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className="transition hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-text-main' : ''}>{item.label}</span>
              )}
              {!isLast ? <ChevronRight size={14} /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
