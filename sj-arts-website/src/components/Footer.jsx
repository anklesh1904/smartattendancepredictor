import { Camera, Globe, Send, Video } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-darkText px-6 py-14 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl">SJ Arts</p>
          <p className="mt-3 text-sm text-white/75">Handmade customized gifts crafted with premium detailing and love.</p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Follow Us</h3>
          <div className="mt-3 flex gap-3">
            {[Camera, Globe, Video].map((Icon, i) => (
              <a key={i} href="https://instagram.com/sjarts" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <form className="mt-3 flex items-center gap-2">
            <input type="email" aria-label="Email" placeholder="Your email" className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary" />
            <button type="submit" aria-label="Subscribe" className="rounded-full bg-secondary p-2 text-darkText"><Send size={16} /></button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-sm text-white/70">© {new Date().getFullYear()} SJ Arts. All rights reserved.</p>
    </footer>
  )
}
