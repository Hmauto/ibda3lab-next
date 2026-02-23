import Link from "next/link";

const steps = [
  { num: "1", title: "Appel à candidatures", desc: "Ouverture des inscriptions pour les porteurs de projets innovants" },
  { num: "2", title: "Entretiens de sélection", desc: "Sélection des candidats par un jury d'experts" },
  { num: "3", title: "Hackathon d'idéation", desc: "Session intensive de créativité et de conception" },
  { num: "4", title: "Bootcamps intensifs", desc: "Formation pratique sur les aspects clés de l'entrepreneuriat" },
  { num: "5", title: "Coaching personnalisé", desc: "Accompagnement individuel avec des mentors expérimentés" },
  { num: "6", title: "IBDA3 LAB Connect", desc: "Mise en relation avec l'écosystème entrepreneurial" },
  { num: "7", title: "Pitch & cérémonie finale", desc: "Présentation des projets devant un jury et des investisseurs" },
];

const avantages = [
  { icon: "🛠️", title: "Outils & méthodes", desc: "Canevas, structuration, pitch, validation et organisation du projet" },
  { icon: "👨‍🏫", title: "Mentorat & coaching", desc: "Feedback précis, suivi et accompagnement personnalisé" },
  { icon: "🤝", title: "Réseau & partenaires", desc: "Rencontres, connexions et opportunités via l'écosystème" },
  { icon: "🚀", title: "Mise en réseau", desc: "IBDA3 LAB Connect pour rencontrer partenaires et acteurs clés" },
  { icon: "📚", title: "Bootcamps intensifs", desc: "Apprentissage pratique, ateliers et progression accélérée" },
  { icon: "🎯", title: "Visibilité & pitch", desc: "Préparation et présentation du projet devant un jury" },
];

export default function Laboratoire() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              IBDA3 LAB
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-emerald-400 transition">Accueil</Link>
              <Link href="/laboratoire" className="text-emerald-400 font-medium">Laboratoire</Link>
              <Link href="/laureats" className="text-slate-300 hover:text-emerald-400 transition">Lauréats</Link>
              <Link href="/galerie" className="text-slate-300 hover:text-emerald-400 transition">Galerie</Link>
              <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-400 mb-4 font-medium tracking-wide">LE LABORATOIRE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Un accompagnement complet à chaque étape</h1>
          
          <p className="text-xl text-slate-300 mb-16 max-w-4xl">
            IBDA3 LAB combine incubation, formation, mentorat et mise en réseau pour transformer une idée en projet structuré et prêt à avancer.
          </p>

          {/* 4 Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: "🚀", title: "Incubation", desc: "Structurer le projet, clarifier la proposition de valeur et construire une base solide." },
              { icon: "📚", title: "Formation", desc: "Bootcamps intensifs pour renforcer les compétences essentielles à l'entrepreneuriat." },
              { icon: "🎯", title: "Mentorat", desc: "Coaching personnalisé et retours concrets pour accélérer la progression." },
              { icon: "🌐", title: "Réseau", desc: "Connexion avec des partenaires, experts et opportunités via l'écosystème." },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-6 rounded-2xl border border-emerald-500/10">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-emerald-400 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Journey */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 md:p-12 rounded-3xl border border-emerald-500/10 mb-20">
            <h2 className="text-3xl font-bold mb-8">Le parcours IBDA3 LAB</h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avantages */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Ce que les participants obtiennent</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avantages.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-6 rounded-2xl border border-emerald-500/10">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-8 rounded-2xl border border-emerald-500/10">
              <h3 className="text-2xl font-bold mb-6">Qui peut candidater ?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-emerald-400 mb-2">Profil du candidat</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>Être porteur d'idée ou de projet</li>
                    <li>Résider au Maroc</li>
                    <li>Âgé(e) entre 20 et 35 ans</li>
                    <li>Individu ou collectif</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700/50 p-8 rounded-2xl border border-emerald-500/10">
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

      <footer className="bg-slate-900 py-12 px-4 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500">Copyright © 2026 IBDA3 LAB, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
