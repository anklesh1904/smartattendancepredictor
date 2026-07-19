import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120])

  return (
    <section id="home" className="relative mt-20 min-h-[90vh] overflow-hidden px-6 py-20 lg:px-10">
      <motion.img
        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1800&q=80"
        alt="Premium handcrafted gift arrangement"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-darkText/80 via-darkText/55 to-darkText/35" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 text-white">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm backdrop-blur">Luxury Handcrafted Creations</span>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Handcrafted Gifts That Create Memories Forever</h1>
          <p className="max-w-xl text-lg text-white/90">Custom photo frames, personalized gifts, resin art and handcrafted creations made with love.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#categories" className="rounded-full bg-secondary px-7 py-3 font-semibold text-darkText transition hover:opacity-90">View Collection</a>
            <a href="https://wa.me/919876543210" className="rounded-full border border-white/70 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">Order Now</a>
          </div>
        </motion.div>

        <div className="relative hidden h-[26rem] lg:block" aria-hidden="true">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5 + item, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute rounded-3xl border border-white/30 bg-white/20 p-6 backdrop-blur ${
                item === 0 ? 'left-0 top-10' : item === 1 ? 'right-14 top-1/3' : 'left-20 bottom-10'
              }`}
            >
              <p className="font-display text-xl text-white">Made with Love</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
