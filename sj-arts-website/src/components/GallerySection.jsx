import { useState } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryItems } from '../data/siteData'

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <motion.h2 className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Gallery</motion.h2>

      <div className="mt-10 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {galleryItems.map((item, index) => (
          <motion.button
            key={item}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            onClick={() => setActiveImage(item)}
            className="group relative w-full overflow-hidden rounded-2xl"
            aria-label="Open gallery image"
          >
            <img src={item} alt={`SJ Arts gallery ${index + 1}`} loading="lazy" className="w-full rounded-2xl transition duration-500 group-hover:scale-105" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImage(null)} role="dialog" aria-modal="true">
            <button className="absolute right-6 top-6 rounded-full bg-white p-2 text-darkText" onClick={() => setActiveImage(null)} aria-label="Close preview">
              <X size={20} />
            </button>
            <motion.img initial={{ scale: 0.92 }} animate={{ scale: 1 }} src={activeImage} alt="Gallery preview" className="max-h-[85vh] max-w-4xl rounded-2xl object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
