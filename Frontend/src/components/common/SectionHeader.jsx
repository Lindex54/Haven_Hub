function SectionHeader({ title, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-5xl ${alignClass}`}>
      <h2 className="whitespace-nowrap text-2xl font-bold leading-tight text-text-main sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
    </div>
  )
}

export default SectionHeader
