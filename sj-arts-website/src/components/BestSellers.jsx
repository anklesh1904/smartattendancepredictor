import { motion } from 'framer-motion'
import { products } from '../data/siteData'
import { sectionVariant, staggerContainer } from '../utils/motion'

export default function BestSellers() {
  return (
    <motion.section id="best-sellers" className="bg-white/70 px-6 py-20 dark:bg-darkBg/60 lg:px-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant}>
      <div className="mx-auto max-w-7xl">
        <h2 className="section-heading">Best Sellers</h2>
        <motion.div variants={staggerContainer} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <motion.article key={product.name} variants={sectionVariant} whileHover={{ y: -8 }} className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-soft dark:bg-darkCard">
              <img src={product.image} alt={product.name} loading="lazy" className="h-56 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h3 className="font-display text-2xl text-darkText dark:text-white">{product.name}</h3>
                <p className="font-semibold text-primary">{product.price}</p>
                <button className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">View Details</button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
