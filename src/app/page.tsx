import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-emerald-400">IBDA3 LAB</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-emerald-400 transition">Accueil</Link>
              <Link href="/laboratoire" className="hover:text-emerald-400 transition">Laboratoire</Link>
              <Link href="/laureats" className="hover:text-emerald-400 transition">Lauréats</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-emerald-400 text-lg mb-4">Donnez vie à vos idées</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-emerald-400">Innovantes</span>
            <br />
            <span className="text-blue-400">Impactantes</span>
            <br />
            <span className="text-purple-400">Entrepreneuriales</span>
          </h1>
          <Link 
            href="/laboratoire" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg transition"
          >
            Découvrir le programme
          </Link>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-center mb-4">Core Values</p>
          <h2 className="text-4xl font-bold text-center mb-12">Un laboratoire d'innovation pour la jeunesse</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Incubation</h3>
              <p className="text-slate-300">Structurer le projet, clarifier la proposition de valeur et construire une base solide.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-4">Formation</h3>
              <p className="text-slate-300">Bootcamps intensifs pour renforcer les compétences essentielles à l'entrepreneuriat.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">Mentorat</h3>
              <p className="text-slate-300">Coaching personnalisé et retours concrets pour accélérer la progression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 text-center mb-4">NOS Partners</p>
          <h2 className="text-4xl font-bold text-center mb-12">Un programme soutenu par des partenaires engagés</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">MEDINATECH</h3>
              <p className="text-slate-300 mb-4">Situé au cœur de la médina de Rabat, Medinatech est un écosystème innovant dédié aux nouvelles technologies et à l'entrepreneuriat.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">FONDATION FRIEDRICH NAUMANN</h3>
              <p className="text-slate-300 mb-4">Une fondation politique allemande d'orientation libérale présente au Maroc depuis 1969.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">Copyright © 2026 IBDA3 LAB, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
