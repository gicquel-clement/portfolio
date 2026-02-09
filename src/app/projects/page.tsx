
'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Déploiement de smartphones professionnels (MDM)',
    period: 'Décembre 2024',
    objectif: 'Automatiser et sécuriser la gestion des mobiles',
    image: '📱',
    technologies: [
      'Microsoft Intune (MDM)',
      'Android Enterprise',
      'Apple Business Manager',
      'Microsoft 365',
      'MFA'
    ],
    actions: [
      'Enrôlement et configuration à distance',
      'Application de politiques de sécurité',
      'Gestion centralisée du parc mobile'
    ],
    resultat: [
      'Gain de temps IT',
      'Sécurité renforcée',
      'Meilleure expérience utilisateur'
    ]
  },
  {
    title: 'Création d’un environnement kiosque sécurisé (application LINA)',
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
      'GPO d’inscription MDM',
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
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-primary-500 to-blue-600 bg-clip-text text-transparent"
        >
          Mes Projets IT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-300 mb-12"
        >
          Projets techniques réalisés dans le cadre professionnel chez Panpharma.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-800/60 rounded-xl p-6 border border-primary-500/20 shadow-lg flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{project.image}</span>
                <h2 className="text-xl font-bold text-primary-300 flex-1">{project.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-1">{project.period}</p>
              <p className="text-primary-400 text-sm mb-2 font-semibold">{project.objectif}</p>
              <div className="mb-2">
                <span className="text-gray-400 text-xs font-semibold">Technologies :</span>
                <span className="text-gray-300 text-xs ml-1">{project.technologies.join(', ')}</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-400 text-xs font-semibold">Actions clés :</span>
                <ul className="list-disc ml-6 text-gray-300 text-xs">
                  {project.actions.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="text-gray-400 text-xs font-semibold">Résultat :</span>
                <ul className="list-disc ml-6 text-gray-300 text-xs">
                  {project.resultat.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
