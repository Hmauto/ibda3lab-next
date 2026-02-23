import Link from "next/link";

const stats = [
  { number: "5", label: "Promotions" },
  { number: "50+", label: "Projets accompagnés" },
  { number: "200+", label: "Entrepreneurs formés" },
  { number: "10M+", label: "DH de financement mobilisé" },
];

const partners = [
  { 
    name: "MEDINATECH", 
    desc: "Situé au cœur de la médina de Rabat, Medinatech est un écosystème innovant dédié aux nouvelles technologies et à l'entrepreneuriat. Fruit d'une collaboration entre l'Association Ribat Al Fath, Startup Maroc, Valyans, et soutenu par l'INDH ainsi que le Ministère des Habous.",
    icon: "🏛️"
  },
  { 
    name: "FONDATION FRIEDRICH NAUMANN", 
    desc: "Fondation politique allemande d'orientation libérale présente au Maroc depuis 1969. Elle accompagne ses partenaires dans la promotion d'une société libre, ouverte et démocratique à travers la formation, l'inspiration et le soutien aux individus.",
    icon: "🤝"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              IBDA3 LAB
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-emerald-400 font-medium">Accueil</Link>
              <Link href="/laboratoire" className="text-slate-300 hover:text-emerald-400 transition">Laboratoire</Link>
              <Link href="/laureats" className="text-slate-300 hover:text-emerald-400 transition">Lauréats</Link>
              <Link href="/galerie" className="text-slate-300 hover:text-emerald-400 transition">Galerie</Link>
              <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition">Contact</Link>
            </div>
            <Link 
              href="/laboratoire"
              className="hidden md:block bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-2 px-6 rounded-full transition"
            >
              Candidater
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-slate-900 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-emerald-400 text-lg mb-4 font-medium tracking-wide">Donnez vie à vos idées</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Innovantes</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Impactantes</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Entrepreneuriales</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Un laboratoire d'innovation pour la jeunesse marocaine. Transformez vos idées en projets concrets avec notre accompagnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/laboratoire" 
              className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-lg transition shadow-lg shadow-emerald-500/25"
            >
              Découvrir le programme
            </Link>
            <Link 
              href="/laureats" 
              className="inline-block border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition"
            >
              Voir les lauréats
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800/30 border-y border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-center mb-4 font-medium tracking-wide">NOTRE APPROCHE</p>
          <h2 className="text-4xl font-bold text-center mb-4">Un laboratoire d'innovation pour la jeunesse</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            IBDA3 LAB combine incubation, formation, mentorat et mise en réseau pour transformer une idée en projet structuré et prêt à avancer.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "Incubation", desc: "Structurer le projet, clarifier la proposition de valeur et construire une base solide." },
              { icon: "📚", title: "Formation", desc: "Bootcamps intensifs pour renforcer les compétences essentielles à l'entrepreneuriat." },
              { icon: "🎯", title: "Mentorat", desc: "Coaching personnalisé et retours concrets pour accélérer la progression." },
              { icon: "🌐", title: "Réseau", desc: "Connexion avec des partenaires, experts et opportunités via l'écosystème." },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-8 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-center mb-4 font-medium tracking-wide">NOS PARTENAIRES</p>
          <h2 className="text-4xl font-bold text-center mb-4">Un programme soutenu par des partenaires engagés</h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            IBDA3 LAB est soutenu par des organisations de renommée internationale et locale.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-8 rounded-2xl border border-emerald-500/10">
                <div className="text-5xl mb-4">{partner.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">{partner.name}</h3>
                <p className="text-slate-300 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl p-12 border border-emerald-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre idée ?</h2>
          <p className="text-slate-300 mb-8 text-lg">Rejoignez IBDA3 LAB et bénéficiez d'un accompagnement complet pour concrétiser votre projet.</p>
          <Link 
            href="/laboratoire" 
            className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-lg transition shadow-lg shadow-emerald-500/25"
          >
            Découvrir le programme
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                IBDA3 LAB
              </Link>
              <p className="text-slate-400 mt-4 text-sm">Un laboratoire d'innovation pour la jeunesse marocaine.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/" className="hover:text-emerald-400 transition">Accueil</Link></li>
                <li><Link href="/laboratoire" className="hover:text-emerald-400 transition">Laboratoire</Link></li>
                <li><Link href="/laureats" className="hover:text-emerald-400 transition">Lauréats</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>📍 Médina de Rabat</li>
                <li>📧 contact@ibda3lab.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Facebook</a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Instagram</a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition">YouTube</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">Copyright © 2026 IBDA3 LAB, All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
