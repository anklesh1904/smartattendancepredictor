import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/siteData'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <motion.h2 className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Testimonials</motion.h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article key={testimonial.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="rounded-3xl border border-primary/10 bg-white p-6 shadow-soft dark:bg-darkCard">
            <div className="flex items-center gap-3">
              <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-darkText dark:text-white">{testimonial.name}</p>
                <p className="text-xs text-darkText/65 dark:text-white/70">{testimonial.role}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 text-secondary" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-4 text-darkText/80 dark:text-white/80">{testimonial.quote}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
