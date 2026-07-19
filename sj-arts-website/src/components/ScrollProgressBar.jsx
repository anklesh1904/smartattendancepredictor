import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })

  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-primary to-secondary" />
}
