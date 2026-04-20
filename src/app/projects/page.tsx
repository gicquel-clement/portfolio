
'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Packaging et déploiement d\'applications via Intune',
    period: '2025 – 2026',
    objectif: 'Automatiser le déploiement et standardiser les environnements',
    image: '📦',
    technologies: [
      'Microsoft Intune',
      'Endpoint Manager',
      'Win32',
      'Windows'
    ],
    actions: [
      'Création de packages applicatifs (.intunewin)',
      'Configuration des paramètres (installation, désinstallation, détection)',
      'Déploiement ciblé sur groupes utilisateurs/appareils',
      'Suivi des déploiements et analyse des erreurs'
    ],
    resultat: [
      'Installation automatisée et rapide',
      'Réduction des erreurs humaines',
      'Environnement homogène et maîtrisé'
    ]
  },
  {
    title: 'Gestion des comptes utilisateurs et des accès (Active Directory)',
    period: '2024 – 2026',
    objectif: 'Sécuriser et structurer les accès au système d\'information',
    image: '🔐',
    technologies: [
      'Active Directory',
      'GPO',
      'Entra ID'
    ],
    actions: [
      'Création, modification et suppression de comptes utilisateurs',
      'Attribution des droits via groupes de sécurité',
      'Organisation des comptes dans les unités d\'organisation (OU)',
      'Suivi et traçabilité des actions via ticketing'
    ],
    resultat: [
      'Accès sécurisés et adaptés aux besoins',
      'Meilleure organisation de l\'annuaire',
      'Réduction des risques liés aux accès non autorisés'
    ]
  },
  {
    title: 'Création d\'un environnement kiosque sécurisé (application LINA)',
    period: 'Février 2025',
    objectif: 'Restreindre les postes à une application métier unique',
    image: '🖥️',
    technologies: [
      'Microsoft Intune',
      'Packaging Win32',
      'Groupes dynamiques'
    ],
    actions: [
      'Conversion application en package Win32',
      'Déploiement en mode kiosque',
      'Mise en place de profils de conformité et sécurité'
    ],
    resultat: [
      'Postes sécurisés',
      'Administration centralisée',
      'Solution validée en production'
    ]
  },
  {
    title: 'Support utilisateurs & gestion des tickets',
    period: '2024 – 2026',
    objectif: 'Garantir la continuité de service',
    image: '🎫',
    technologies: [
      'GLPI',
      'Windows 10/11',
      'Réseaux',
      'Imprimantes'
    ],
    actions: [
      'Diagnostic incidents matériels / logiciels',
      'Réinitialisation comptes, mots de passe',
      'Dépannage réseau, imprimantes, postes',
      'Documentation systématique'
    ],
    resultat: [
      'Priorisation',
      'Communication utilisateur',
      'Rigueur et traçabilité'
    ]
  },
  {
    title: 'Intégration des anciens postes dans Microsoft Intune',
    period: 'Octobre 2025',
    objectif: 'Uniformiser et sécuriser tout le parc informatique',
    image: '💻',
    technologies: [
      'Active Directory',
      'GPO d\'inscription MDM',
      'Microsoft Intune / Endpoint Manager'
    ],
    actions: [
      'Inventaire du parc',
      'Création et déploiement GPO MDM',
      'Vérification conformité et synchronisation',
      'Rédaction procédure interne'
    ],
    resultat: [
      'Parc 100 % géré via Intune',
      'Sécurité homogène',
      'Projet stratégique SI'
    ]
  },
  {
    title: 'Déploiement de mobiles via Intune',
    period: '2024 – 2026',
    objectif: 'Automatiser la gestion et sécuriser les appareils mobiles',
    image: '📱',
    technologies: [
      'Microsoft Intune',
      'Endpoint Manager',
      'Android/iOS'
    ],
    actions: [
      'Enrôlement et configuration des appareils mobiles via Intune',
      'Application des politiques de sécurité et de conformité',
      'Déploiement des applications professionnelles',
      'Gestion centralisée des appareils et des accès utilisateurs'
    ],
    resultat: [
      'Déploiement rapide et automatisé des mobiles',
      'Sécurité renforcée des données et des accès',
      'Réduction du temps de gestion et des interventions IT'
    ]
  },
  {
    title: 'Gestion du parc informatique',
    period: 'Juin 2025',
    objectif: 'Maintenir performance, sécurité et disponibilité',
    image: '🗂️',
    technologies: [
      'Intune',
      'Autopilot',
      'Windows 10/11'
    ],
    actions: [
      'Inventaire matériel',
      'Renouvellement des postes',
      'Déploiement via Autopilot',
      'Transfert données utilisateurs',
      'Reconditionnement / recyclage'
    ],
    resultat: [
      'Parc à jour',
      'Traçabilité complète',
      'Réduction des incidents matériels'
    ]
  }
];

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Mes Projets IT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white mb-12"
        >
          Projets techniques réalisés dans le cadre professionnel chez Panpharma.
        </motion.p>

        {/* Section Dossiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">📁 Dossiers Pédagogiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="/Dossier%20E5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-r from-violet-500/20 to-violet-600/20 border border-violet-500/50 rounded-xl p-6 hover:border-violet-400/70 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📄</span>
                <h3 className="text-xl font-bold text-white">Dossier E5</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Documentation technique du projet E5
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-white text-sm font-medium">Télécharger</span>
              </div>
            </motion.a>
            <motion.a
              href="/Dossier%20E6.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-r from-violet-500/20 to-violet-600/20 border border-violet-500/50 rounded-xl p-6 hover:border-violet-400/70 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📄</span>
                <h3 className="text-xl font-bold text-white">Dossier E6</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Documentation technique du projet E6
              </p>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-white text-sm font-medium">Télécharger</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold mb-8 text-white"
        >
          🚀 Projets Techniques
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-800/60 rounded-xl p-6 border border-violet-500/20 shadow-lg flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{project.image}</span>
                <h2 className="text-xl font-bold text-violet-400 flex-1">{project.title}</h2>
              </div>
              <p className="text-white text-sm mb-1">{project.period}</p>
              <p className="text-violet-400 text-sm mb-2 font-semibold">{project.objectif}</p>
              <div className="mb-2">
                <span className="text-white text-xs font-semibold">Technologies :</span>
                <span className="text-white text-xs ml-1">{project.technologies.join(', ')}</span>
              </div>
              <div className="mb-2">
                <span className="text-white text-xs font-semibold">Actions clés :</span>
                <ul className="list-disc ml-6 text-white text-xs">
                  {project.actions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="text-white text-xs font-semibold">Résultat :</span>
                <ul className="list-disc ml-6 text-white text-xs">
                  {project.resultat.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Veilles Technologiques - À la fin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">🔍 Veilles Technologiques</h2>
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/60 rounded-xl p-8 border border-violet-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">1. Puces quantiques</h3>
              <div className="space-y-4 text-white">
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Principe :</h4>
                  <p className="text-white/90">
                    Utilisation de qubits (superposition + intrication) → puissance de calcul largement supérieure aux ordinateurs classiques.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Évolution récente (2024–2025) :</h4>
                  <ul className="list-disc ml-6 text-white/90 space-y-1">
                    <li>Forte accélération des acteurs majeurs (IBM, Google, Intel, D-Wave)</li>
                    <li>Processeurs dépassant 1000 qubits (ex : IBM Condor)</li>
                    <li>Amélioration clé : correction d\'erreurs, indispensable pour fiabiliser</li>
                    <li>Début de commercialisation (D-Wave, solutions cloud)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Tendance :</h4>
                  <ul className="list-disc ml-6 text-white/90 space-y-1">
                    <li>Passage du stade expérimental → pré-industrialisation</li>
                    <li>Intégration future dans le cloud hybride</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Enjeu principal :</h4>
                  <p className="text-white/90">
                    Rendre le calcul quantique exploitable en entreprise d\'ici ~2030
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/60 rounded-xl p-8 border border-violet-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">2. Menace quantique & cryptographie post-quantique</h3>
              <div className="space-y-4 text-white">
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Problème :</h4>
                  <p className="text-white/90">
                    Les algorithmes actuels (RSA, ECC) seront cassés par les ordinateurs quantiques (algorithme de Shor)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Réponse :</h4>
                  <p className="text-white/90">
                    Développement de la cryptographie post-quantique (PQC)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Avancées majeures :</h4>
                  <ul className="list-disc ml-6 text-white/90 space-y-1">
                    <li>2024 : standardisation par le NIST de Kyber (chiffrement) et Dilithium (signature)</li>
                    <li>Déploiement progressif : Tests TLS hybrides (Google, Cloudflare)</li>
                    <li>Intégration dans le cloud (Microsoft, AWS)</li>
                    <li>Recommandations officielles (ANSSI)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Tendance :</h4>
                  <p className="text-white/90">
                    Passage à une adoption concrète en entreprise
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-violet-400 mb-2">Enjeu principal :</h4>
                  <p className="text-white/90">
                    Anticiper dès maintenant la migration pour éviter une faille massive de sécurité
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
