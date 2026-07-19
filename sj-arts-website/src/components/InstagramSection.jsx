import { Camera } from 'lucide-react'
import { motion } from 'framer-motion'

const feed = [
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21c?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80',
]

export default function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-primary/15 bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-soft md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em]">Instagram</p>
            <h2 className="mt-2 font-display text-4xl">@sjarts</h2>
            <p className="mt-2 max-w-2xl text-white/90">See our latest handcrafted stories, personalized gift ideas, and customer moments.</p>
          </div>
          <a href="https://instagram.com/sjarts" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90">
            <Camera size={18} /> Follow
          </a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {feed.map((img, index) => (
            <img key={img} src={img} alt={`Instagram feed ${index + 1}`} loading="lazy" className="h-44 w-full rounded-2xl object-cover" />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
