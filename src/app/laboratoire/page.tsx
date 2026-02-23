import Link from "next/link";

export default function Laboratoire() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-emerald-400">IBDA3 LAB</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-emerald-400 transition">Accueil</Link>
              <Link href="/laboratoire" className="text-emerald-400">Laboratoire</Link>
              <Link href="/laureats" className="hover:text-emerald-400 transition">Lauréats</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 mb-4">LE LABORATOIRE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Un accompagnement complet à chaque étape</h1>
          
          <p className="text-xl text-slate-300 mb-12">IBDA3 LAB combine incubation, formation, mentorat et mise en réseau pour transformer une idée en projet structuré et prêt à avancer.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2">Incubation</h3>
              <p className="text-slate-400 text-sm">Structurer le projet, clarifier la proposition de valeur et construire une base solide.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold mb-2">Formation</h3>
              <p className="text-slate-400 text-sm">Bootcamps intensifs pour renforcer les compétences essentielles à l'entrepreneuriat.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Mentorat</h3>
              <p className="text-slate-400 text-sm">Coaching personnalisé et retours concrets pour accélérer la progression.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold mb-2">Réseau</h3>
              <p className="text-slate-400 text-sm">Connexion avec des partenaires, experts et opportunités via l'écosystème.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-8">Le parcours IBDA3 LAB</h2>
            <div className="space-y-6">
              {[
                { num: "1", title: "Appel à candidatures", desc: "Ouverture des inscriptions pour les porteurs de projets" },
                { num: "2", title: "Entretiens de sélection", desc: "Sélection des candidats par un jury d'experts" },
                { num: "3", title: "Hackathon d'idéation", desc: "Session intensive de créativité et de conception" },
                { num: "4", title: "Bootcamps intensifs", desc: "Formation pratique sur les aspects clés de l'entrepreneuriat" },
                { num: "5", title: "Coaching personnalisé", desc: "Accompagnement individuel avec des mentors expérimentés" },
                { num: "6", title: "IBDA3 LAB Connect", desc: "Mise en relation avec l'écosystème entrepreneurial" },
                { num: "7", title: "Pitch & cérémonie finale", desc: "Présentation des projets devant un jury et des investisseurs" },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Qui peut candidater ?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-emerald-400">Profil du candidat</h4>
                  <ul className="list-disc list-inside text-slate-300 mt-2">
                    <li>Être porteur d'idée ou de projet</li>
                    <li>Résider au Maroc</li>
                    <li>Âgé(e) entre 20 et 35 ans</li>
                    <li>Individu ou collectif</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Critères du projet</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Projet innovant (idée, approche ou modèle)</li>
                <li>Répond à un besoin réel / problème concret</li>
                <li>Faisable et structurable à court terme</li>
                <li>Potentiel d'impact (économique, social ou environnemental)</li>
              </ul>
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
