import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CtaBar({ to, children, className = '' }) {
  return (
    <Link
      className={`group flex min-h-20 w-full items-center justify-center gap-4 bg-primary px-7 py-5 text-center text-lg font-bold !text-text-white shadow-card transition-colors hover:bg-primary-dark ${className}`}
      to={to}
    >
      {children}
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary-dark transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight aria-hidden="true" size={18} />
      </span>
    </Link>
  )
}

export default CtaBar
