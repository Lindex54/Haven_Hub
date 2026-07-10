import { useEffect } from 'react'

function ImageLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      aria-label="Image lightbox"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
    >
      <button
        aria-label="Close lightbox"
        className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-text-main"
        onClick={onClose}
        type="button"
      >
        Close
      </button>
      <figure className="max-w-4xl rounded-[24px] bg-surface p-4 shadow-card">
        <img alt={item.alt} className="max-h-[75vh] w-full rounded-[20px] object-cover" src={item.src} />
        <figcaption className="space-y-2 p-4">
          <p className="text-xl font-semibold text-text-main">{item.title}</p>
          <p className="text-sm leading-7 text-text-muted">{item.description}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default ImageLightbox
