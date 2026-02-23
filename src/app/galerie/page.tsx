import Link from "next/link";

const photos = [
  { year: "2021", title: "Promotion #Restart21", desc: "Première édition d'IBDA3 LAB" },
  { year: "2023", title: "Promotion #Liberate23", desc: "Focus sur l'autonomisation des jeunes" },
  { year: "2024", title: "Promotion #Revolutionize24", desc: "Transformation des secteurs clés" },
  { year: "2025", title: "Promotion #Action", desc: "De la réflexion à l'action" },
];

export default function Galerie() {
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
              <Link href="/galerie" className="text-emerald-400">Galerie</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-center mb-4">MÉDIATHÈQUE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Galerie Photo</h1>
          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Découvrez IBDA3 LAB en action à travers les moments forts de nos promotions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {photos.map((photo, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-2xl font-bold">{photo.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                  <p className="text-slate-400">{photo.desc}</p>
                </div>
              </div>
            ))}
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
