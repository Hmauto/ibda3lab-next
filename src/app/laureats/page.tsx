import Link from "next/link";

const laureats = {
  "2021": [
    { name: "Retroots", founder: "Jalal Yassine", desc: "Première marque marocaine combinant rétro-gaming et culture marocaine à travers du recyclage de produits rétro." },
    { name: "Kanoni", founder: "Hamza Zaki", desc: "Plateforme d'assistance, d'accompagnement et de formation juridique accessible et personnalisée." },
    { name: "Babysitting Maroc", founder: "Abdelkarim Bourih & Chaimae Zandar", desc: "Application de garde à domicile connectant parents et babysitters qualifiés." },
    { name: "Jnane Amir", founder: "Nawal Ibn El Fadil", desc: "Production et valorisation des plantes aromatiques avec technique de culture hydroponique." },
    { name: "Lacasse Metals", founder: "Samia Abdelouafi", desc: "Unité industrielle de recyclage des déchets de métaux légers." },
    { name: "ZicBac", founder: "Khawla Gacem & Simo Boughoufala", desc: "Application d'éducation scolaire par l'art et le numérique via le rap." },
    { name: "Akal Market", founder: "Sara Benbrahim", desc: "Marché éco-responsable 100% marocain valorisant les marques locales." },
    { name: "Leather Art", founder: "Johaina El Ibrahimi", desc: "Entreprise spécialisée dans la fabrication de produits traditionnels en cuir avec touche moderne." },
    { name: "Same Wax Style", founder: "Pauline Naomi Ashley Kamgue", desc: "Marque de prêt-à-porter en pagnes africains mêlant moderne et artisanal." },
    { name: "ISSAM ACADEMY", founder: "Oumaima Bayri & Ikram Qais", desc: "Plateforme E-learning avec formations académiques et soft-skills à prix accessible." },
  ],
  "2023": [
    { name: "Tourz", founder: "Saad Douh", desc: "Plateforme de voyage unique et personnalisable avec concept de gamification du tourisme." },
    { name: "3winati", founder: "Lina Hammoumi", desc: "Tablette braille améliorant l'accès à l'information pour les personnes aveugles." },
    { name: "Colya", founder: "Aymen Hatif", desc: "Plateforme de mise en relation entre voyageurs et expéditeurs de colis." },
    { name: "Eventy", founder: "Khalil Ibrahim Rhoujdami & Anas Sedrati", desc: "Plateforme marocaine pour faciliter la gestion des événements." },
    { name: "DigiBlood", founder: "El Ghali Ouali Alami & Ahmed Ben Abdeljalil", desc: "Digitalisation du don de sang au Maroc via des solutions technologiques innovantes." },
    { name: "Trash Game", founder: "Mohammed Ramy", desc: "Jeu de société écologique sensibilisant à la préservation de l'environnement." },
    { name: "Food Heroes", founder: "Chaimaa Driouch", desc: "Plateforme luttant contre les déchets alimentaires des restaurants." },
    { name: "Wovoiture", founder: "Mounaim El Khouater & Abderrahmane Berahal", desc: "Marketplace de location et réservation de véhicules en ligne." },
    { name: "Creation Thrill", founder: "Hala Lahlou", desc: "Plateforme d'e-learning vulgarisant les technologies dans la construction." },
    { name: "LMSA", founder: "Mohammed Ayoub Demnati", desc: "Laboratoire Marocain de Sécurité Alimentaire fournissant des analyses bactériologiques." },
    { name: "CoffeeBurn", founder: "Salma Houach", desc: "Bûches écologiques fabriquées à partir de marc de café." },
    { name: "Zerbyti", founder: "Ayoub Louhabi & Hicham Kamili", desc: "Production et commercialisation de tapis personnalisés selon les goûts clients." },
    { name: "Wertikol", founder: "Yassir Debbah", desc: "Startup spécialisée dans l'agriculture verticale utilisant des technologies avancées." },
  ],
  "2024": [
    { name: "LegalEASE", founder: "", desc: "Modèle d'IA avancé conçu pour répondre aux questions juridiques des professionnels et particuliers." },
    { name: "LUMA", founder: "", desc: "Solution d'éclairage innovante utilisant une batterie à eau salée pour zones rurales sans électricité." },
    { name: "BLASSI", founder: "", desc: "Application facilitant la recherche de places de stationnement disponibles en temps réel." },
    { name: "HB Institute", founder: "", desc: "Centre de formation dédié aux professionnels de santé combinant compétences techniques et soft skills." },
    { name: "SolarAgrobot", founder: "", desc: "Technologie de rupture intégrant IA avec système hybride terrestre et aérien pour l'agriculture." },
    { name: "METAFARM", founder: "", desc: "Entreprise de technologie agricole utilisant des jumeaux numériques pour optimiser les rendements." },
    { name: "GUELA+", founder: "", desc: "Fontaines en argile durable avec système de filtration biodégradable pour l'accès à l'eau potable." },
    { name: "iReview", founder: "", desc: "Plateforme innovante dédiée aux avis en ligne authentiques sur les entreprises marocaines." },
    { name: "Keyn", founder: "", desc: "Produits pour diabétiques, sportifs et allergiques avec sucre naturel extrait de pommes." },
    { name: "3ich l'Game", founder: "", desc: "Expérience ludique organisant des sessions de jeux de société pour particuliers et entreprises." },
  ],
  "2025": [
    { name: "The menu 360", founder: "Aymane Issami", desc: "Solution digitale innovante modernisant l'expérience client dans la restauration via menus interactifs QR." },
    { name: "WasteLink", founder: "Othmane Mahmoudi", desc: "Solution circulaire connectant ateliers, marques et recycleurs pour la valorisation des déchets textiles." },
    { name: "OCEALIA", founder: "Adam Baizakh", desc: "Solution transformant les déchets de poissons en engrais naturel pour l'agriculture." },
    { name: "MatchFund", founder: "Tahar El harit", desc: "Plateforme numérique mettant en relation les associations locales et les bailleurs de fonds." },
    { name: "BoostUp", founder: "Saad Boubagura", desc: "Distributeur intelligent de compléments alimentaires en poudre installé dans les salles de sport." },
    { name: "Mossika", founder: "Ilias Eddaki", desc: "Plateforme en ligne de cours de musique interactive valorisant les traditions marocaines." },
    { name: "Terre&Laine", founder: "Mohamed Amine Abbi", desc: "Matériau de construction innovant à base d'argile et de laine de mouton." },
    { name: "Artisouq", founder: "Hanaa Boualame", desc: "Marketplace digitale dédiée aux artisans marocains pour un commerce équitable." },
    { name: "PayPrint", founder: "Walid Laqrafi", desc: "Imprimante connectée en libre-service pour accès rapide aux documents." },
  ],
};

export default function Laureats() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-emerald-400">IBDA3 LAB</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-emerald-400 transition">Accueil</Link>
              <Link href="/laboratoire" className="hover:text-emerald-400 transition">Laboratoire</Link>
              <Link href="/laureats" className="text-emerald-400">Lauréats</Link>
              <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Les Lauréats IBDA3 LAB</h1>

          {Object.entries(laureats).map(([year, projects]) => (
            <div key={year} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-emerald-400 font-bold">#{year === "2021" ? "Restart21" : year === "2023" ? "Liberate23" : year === "2024" ? "Revolutionize24" : "Action"}</span>
                <h2 className="text-3xl font-bold">Promotion {year}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                  <div key={i} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2">{project.name}</h3>
                    {project.founder && <p className="text-sm text-slate-400 mb-2">{project.founder}</p>}
                    <p className="text-slate-300 text-sm">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
