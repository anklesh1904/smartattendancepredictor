import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import ScrollProgressBar from './components/ScrollProgressBar'
import ScrollToTop from './components/ScrollToTop'
import CursorEffect from './components/CursorEffect'
import HomePage from './pages/HomePage'
import useTheme from './hooks/useTheme'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-bg text-darkText transition-colors duration-300 dark:bg-darkBg dark:text-white">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <CursorEffect />
      <ScrollProgressBar />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <HomePage />
      <ScrollToTop />
    </div>
  )
}
