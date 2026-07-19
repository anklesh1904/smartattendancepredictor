import { Award, BadgeCheck, Box, HeartHandshake, Sparkles, Truck, WandSparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { benefits } from '../data/siteData'

const icons = [WandSparkles, Award, BadgeCheck, Box, Truck, Sparkles, HeartHandshake]

export default function WhyChoose() {
  return (
    <motion.section className="bg-white/70 px-6 py-20 dark:bg-darkBg/60 lg:px-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl">
        <h2 className="section-heading">Why Choose SJ Arts</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <motion.article key={benefit} whileHover={{ y: -6 }} className="rounded-2xl border border-primary/15 bg-white/75 p-5 shadow-soft backdrop-blur dark:bg-darkCard/85">
                <Icon className="text-primary dark:text-secondary" size={24} />
                <h3 className="mt-3 font-semibold text-darkText dark:text-white">{benefit}</h3>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
