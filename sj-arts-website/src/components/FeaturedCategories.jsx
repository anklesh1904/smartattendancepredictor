import { motion } from 'framer-motion'
import { categories } from '../data/siteData'
import { sectionVariant, staggerContainer } from '../utils/motion'

export default function FeaturedCategories() {
  return (
    <motion.section id="categories" className="mx-auto max-w-7xl px-6 py-20 lg:px-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant}>
      <h2 className="section-heading">Featured Categories</h2>
      <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
        {categories.map((category) => (
          <motion.article key={category.title} variants={sectionVariant} whileHover={{ y: -8 }} className="group overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-soft dark:bg-darkCard">
            <div className="h-44 overflow-hidden">
              <img src={category.image} alt={category.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl text-darkText dark:text-white">{category.title}</h3>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}
