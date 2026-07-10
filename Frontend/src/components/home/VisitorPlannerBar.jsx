import { CalendarDays, Compass, House, Users } from 'lucide-react'
import Button from '../common/Button'

const highlights = [
  { icon: CalendarDays, label: 'Flexible trip dates' },
  { icon: Compass, label: 'Guided local experiences' },
  { icon: House, label: 'Accommodation support' },
  { icon: Users, label: 'Group planning available' },
]

function VisitorPlannerBar() {
  return (
    <section className="relative z-30 -mt-8 pb-6 sm:-mt-10 lg:-mt-12">
      <div className="container-custom">
        <div className="grid gap-4 rounded-[28px] border border-border/80 bg-surface/95 p-6 shadow-[0_22px_60px_rgba(20,34,29,0.18)] backdrop-blur-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-soft-background px-4 py-3">
                <span className="rounded-full bg-lake-blue-light p-2 text-lake-blue">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-text-main">{label}</span>
              </div>
            ))}
          </div>
          <Button className="justify-center" to="/plan-your-visit">
            Request a Visit
          </Button>
        </div>
      </div>
    </section>
  )
}

export default VisitorPlannerBar
