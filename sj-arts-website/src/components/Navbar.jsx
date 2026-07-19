import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../data/siteData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-bg/80 backdrop-blur dark:border-primary/20 dark:bg-darkBg/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10" aria-label="Main navigation">
        <a href="#home" className="font-display text-2xl text-primary dark:text-secondary">SJ Arts</a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-darkText transition hover:text-primary dark:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button className="rounded-md p-2 text-primary lg:hidden" onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen} aria-label="Toggle mobile menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-primary/10 bg-white/95 px-6 pb-6 pt-3 dark:bg-darkBg"
          >
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a onClick={() => setIsOpen(false)} href={link.href} className="block rounded-md px-2 py-1 text-darkText hover:text-primary dark:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
