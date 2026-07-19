import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs } from '../data/siteData'

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white/70 px-6 py-20 dark:bg-darkBg/60 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const expanded = open === index
            return (
              <article key={faq.question} className="rounded-2xl border border-primary/15 bg-white shadow-soft dark:bg-darkCard">
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(expanded ? -1 : index)}
                  aria-expanded={expanded}
                >
                  <span className="font-medium text-darkText dark:text-white">{faq.question}</span>
                  <motion.span animate={{ rotate: expanded ? 180 : 0 }}><ChevronDown size={18} /></motion.span>
                </button>
                <AnimatePresence>
                  {expanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 pb-5 text-darkText/75 dark:text-white/75">
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
