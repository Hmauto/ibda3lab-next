import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "5", label: "Promotions" },
  { number: "50+", label: "Projets accompagnés" },
  { number: "200+", label: "Entrepreneurs formés" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020203] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#020203]/95 backdrop-blur-md z-50 border-b border-[#2071BC]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="IBDA3 LAB" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-white">IBDA3 LAB</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#E72281] font-medium">Accueil</Link>
              <Link href="/laboratoire" className="text-white/80 hover:text-[#2071BC] transition">Laboratoire</Link>
              <Link href="/laureats" className="text-white/80 hover:text-[#2071BC] transition">Lauréats</Link>
              <Link href="/galerie" className="text-white/80 hover:text-[#2071BC] transition">Galerie</Link>
              <Link href="/contact" className="text-white/80 hover:text-[#2071BC] transition">Contact</Link>
            </div>
            <Link 
              href="/laboratoire"
              className="hidden md:block bg-[#E72281] hover:bg-[#FF60AD] text-white font-bold py-2 px-6 rounded-full transition"
            >
              Candidater
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2071BC]/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#79EF91] text-lg mb-4 font-medium">Donnez vie à vos idées</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#2071BC]">Innovantes</span>
                <br />
                <span className="text-[#E72281]">Impactantes</span>
                <br />
                <span className="text-[#FDCB56]">Entrepreneuriales</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Un laboratoire d'innovation pour la jeunesse marocaine. Transformez vos idées en projets concrets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/laboratoire" 
                  className="inline-block bg-[#E72281] hover:bg-[#FF60AD] text-white font-bold py-4 px-8 rounded-full text-lg transition"
                >
                  Découvrir le programme
                </Link>
                <Link 
                  href="/laureats" 
                  className="inline-block border-2 border-[#2071BC] text-[#2071BC] hover:bg-[#2071BC] hover:text-white font-bold py-4 px-8 rounded-full text-lg transition"
                >
                  Voir les lauréats
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/hero.jpg" 
                  alt="IBDA3 LAB" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#164E82]/20 border-y border-[#2071BC]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#E72281] mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#79EF91] text-center mb-4 font-medium">Core Values</p>
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2071BC]">Un laboratoire d'innovation pour la jeunesse</h2>
          <p className="text-white/70 text-center mb-12 max-w-3xl mx-auto">
            IBDA3 LAB combine incubation, formation, mentorat et mise en réseau pour transformer une idée en projet structuré.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "Incubation", desc: "Structurer le projet, clarifier la proposition de valeur et construire une base solide.", color: "#2071BC" },
              { icon: "📚", title: "Formation", desc: "Bootcamps intensifs pour renforcer les compétences essentielles à l'entrepreneuriat.", color: "#E72281" },
              { icon: "🎯", title: "Mentorat", desc: "Coaching personnalisé et retours concrets pour accélérer la progression.", color: "#79EF91" },
              { icon: "🌐", title: "Réseau", desc: "Connexion avec des partenaires, experts et opportunités via l'écosystème.", color: "#FDCB56" },
            ].map((item, i) => (
              <div key={i} className="bg-[#164E82]/30 p-8 rounded-2xl border border-[#2071BC]/20 hover:border-[#2071BC]/50 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4 bg-[#164E82]/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#79EF91] text-center mb-4 font-medium">NOS Partners</p>
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2071BC]">Un programme soutenu par des partenaires engagés</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#164E82]/30 p-8 rounded-2xl border border-[#2071BC]/20">
              <h3 className="text-xl font-bold mb-4 text-[#2071BC]">MEDINATECH</h3>
              <p className="text-white/70">Situé au cœur de la médina de Rabat, Medinatech est un écosystème innovant dédié aux nouvelles technologies et à l'entrepreneuriat.</p>
            </div>
            <div className="bg-[#164E82]/30 p-8 rounded-2xl border border-[#2071BC]/20">
              <h3 className="text-xl font-bold mb-4 text-[#E72281]">FONDATION FRIEDRICH NAUMANN</h3>
              <p className="text-white/70">Fondation politique allemande d'orientation libérale présente au Maroc depuis 1969.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020203] py-12 px-4 border-t border-[#2071BC]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/images/logo.png" alt="IBDA3 LAB" width={30} height={30} className="h-8 w-auto" />
                <span className="text-xl font-bold">IBDA3 LAB</span>
              </div>
              <p className="text-white/60 text-sm">Un laboratoire d'innovation pour la jeunesse marocaine.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#2071BC]">Navigation</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="/" className="hover:text-[#E72281] transition">Accueil</Link></li>
                <li><Link href="/laboratoire" className="hover:text-[#E72281] transition">Laboratoire</Link></li>
                <li><Link href="/laureats" className="hover:text-[#E72281] transition">Lauréats</Link></li>
                <li><Link href="/contact" className="hover:text-[#E72281] transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#2071BC]">Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>📍 Médina de Rabat</li>
                <li>📧 contact@ibda3lab.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#2071BC]">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-[#E72281] transition">Facebook</a>
                <a href="#" className="text-white/60 hover:text-[#E72281] transition">Instagram</a>
                <a href="#" className="text-white/60 hover:text-[#E72281] transition">YouTube</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#2071BC]/20 pt-8 text-center">
            <p className="text-white/50 text-sm">Copyright © 2026 IBDA3 LAB, All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
