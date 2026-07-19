import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-bg text-center"
      aria-label="Loading SJ Arts website"
    >
      <div className="space-y-4">
        <motion.div
          className="mx-auto h-14 w-14 rounded-full border-4 border-secondary/25 border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <p className="font-display text-2xl text-primary">SJ Arts</p>
      </div>
    </motion.div>
  )
}
