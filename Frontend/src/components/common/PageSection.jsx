function PageSection({ children, className = '' }) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  )
}

export default PageSection
