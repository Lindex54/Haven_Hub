function PageSection({
  children,
  className = '',
  containerClassName = '',
  background = '',
}) {
  return (
    <section className={`section-padding ${background} ${className}`.trim()}>
      <div className={`container-custom ${containerClassName}`.trim()}>{children}</div>
    </section>
  )
}

export default PageSection
