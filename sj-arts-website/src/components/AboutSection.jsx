import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <motion.section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
      <img
        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80"
        alt="Artisan creating customized gifts"
        loading="lazy"
        className="h-full min-h-[420px] w-full rounded-3xl object-cover shadow-soft"
      />
      <div className="my-auto space-y-6">
        <h2 className="section-heading !text-left">About SJ Arts</h2>
        <p className="text-lg text-darkText/80 dark:text-white/80">
          At SJ Arts, every piece is handcrafted with intention. We blend premium materials, artistic detail, and customization to create gifts that feel personal and timeless.
        </p>
        <p className="text-lg text-darkText/80 dark:text-white/80">
          From elegant photo frames to bespoke resin art, our creations are made with love and finished to a high standard, so each order becomes a memory your loved ones cherish forever.
        </p>
      </div>
    </motion.section>
  )
}
