import { Camera, Mail, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white/70 px-6 py-20 dark:bg-darkBg/60 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <h2 className="section-heading !text-left">Let&apos;s Craft Your Perfect Gift</h2>
          <p className="text-darkText/80 dark:text-white/80">Reach us directly for quick customization support and order assistance.</p>
          <div className="space-y-3">
            <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white"><MessageCircle size={18} /> WhatsApp: +91 9876543210</a>
            <a href="https://instagram.com/sjarts" target="_blank" rel="noreferrer" className="block text-primary"><Camera className="mr-2 inline" size={16} />Instagram</a>
            <p className="text-darkText dark:text-white"><Mail className="mr-2 inline" size={16} />contact@sjarts.com</p>
            <p className="text-darkText dark:text-white"><MapPin className="mr-2 inline" size={16} />123 Artisan Lane, Your City, India</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-primary/20 bg-white p-4 shadow-soft dark:bg-darkCard">
          <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-bg text-center text-darkText/70 dark:bg-darkBg dark:text-white/70">
            Google Maps Embed Placeholder
          </div>
        </motion.div>
      </div>
    </section>
  )
}
