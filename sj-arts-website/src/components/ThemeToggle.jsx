import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white/80 p-2 text-primary shadow-soft backdrop-blur dark:bg-darkBg/80 dark:text-secondary"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </motion.button>
  )
}
