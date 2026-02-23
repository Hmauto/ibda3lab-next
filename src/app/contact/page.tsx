import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-emerald-400">IBDA3 LAB</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-emerald-400 transition">Accueil</Link>
              <Link href="/laboratoire" className="hover:text-emerald-400 transition">Laboratoire</Link>
              <Link href="/laureats" className="hover:text-emerald-400 transition">Lauréats</Link>
              <Link href="/contact" className="text-emerald-400">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-400 text-center mb-4">Contactez-nous</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Une question ?</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Notre équipe est à votre écoute pour toute question sur le programme, les candidatures ou les partenariats.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Envoyer un message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition"
                >
                  Envoyer
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-2xl">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p className="text-slate-400">Medinatech, Médina de Rabat, Maroc</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-slate-400">contact@ibda3lab.com</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2">Réseaux sociaux</h3>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Facebook</a>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Instagram</a>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 transition">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 py-12 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">Copyright © 2026 IBDA3 LAB, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
