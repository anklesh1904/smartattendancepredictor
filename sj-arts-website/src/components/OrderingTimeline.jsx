import { motion } from 'framer-motion'
import { steps } from '../data/siteData'

export default function OrderingTimeline() {
  return (
    <motion.section className="bg-gradient-to-b from-white/70 to-transparent px-6 py-20 dark:from-darkBg/60 lg:px-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="mx-auto max-w-7xl">
        <h2 className="section-heading">How Ordering Works</h2>
        <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-5">
          {steps.map((step, idx) => (
            <motion.div key={step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">{idx + 1}</div>
              <p className="mt-3 text-sm font-medium text-darkText dark:text-white">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
