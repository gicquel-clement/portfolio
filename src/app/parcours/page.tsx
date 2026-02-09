'use client'

import { motion } from 'framer-motion'

export default function ParcoursPage() {
  const experiences = [
    {
      year: '2024 - 2026',
      title: 'Technicien Systèmes & Réseaux',
      company: 'Panpharma',
      description: 'Alternance en BTS SIO Option SISR',
      tasks: [
        'Déploiement et administration de postes Windows (Intune & Autopilot)',
        'Gestion quotidienne d\'Active Directory (comptes, groupes, GPO)',
        'Support utilisateurs N1/N2 via GLPI (incidents, demandes)',
        'Gestion du parc informatique et des serveurs',
        'Maintenance préventive et support sur systèmes et réseaux'
      ]
    }
  ]

  const formations = [
    {
      year: '2024 - 2026',
      title: 'BTS SIO - Option SISR',
      institution: 'ESUP Rennes',
      description: 'Systèmes d\'Information et Organisation - Spécialité Solutions d\'Infrastructure, Sécurité et Réseaux',
      status: 'En cours'
    },
    {
      year: '2023',
      title: 'Baccalauréat Technologique STI2D',
      institution: 'Lycée',
      description: 'Sciences et Technologies de l\'Industrie et du Développement Durable',
      status: 'Obtenu'
    }
  ]

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-primary-500 to-blue-600 bg-clip-text text-transparent"
        >
          Mon Parcours
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-300 mb-16"
        >
          Formation et expérience professionnelle
        </motion.p>

        {/* Projet Professionnel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-primary-300">🎯 Projet Professionnel</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-r from-primary-600/20 to-blue-600/20 rounded-lg p-8 border border-primary-500/30 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-primary-300 mb-4">
              Administration Systèmes et Réseaux
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Actuellement étudiant en BTS SIO, je me forme aux métiers du support et de l'informatique d'entreprise. Dans la continuité de ce parcours, je souhaite m'orienter vers l'administration systèmes et réseaux.
            </p>
          </motion.div>
        </motion.div>

        {/* Expériences */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-primary-300">👨‍💼 Expérience Professionnelle</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg p-6 border-l-4 border-primary-500 backdrop-blur-sm hover:bg-gradient-to-r hover:from-slate-800/70 hover:to-slate-900/70 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-300">
                      {exp.title}
                    </h3>
                    <p className="text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.year}</p>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2 ml-4">
                  {exp.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 flex items-start"
                    >
                      <span className="text-primary-400 mr-3 mt-1">▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-primary-300">🎓 Formation</h2>

          <div className="space-y-6">
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + experiences.length) * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg p-6 border-l-4 border-primary-400 backdrop-blur-sm hover:bg-gradient-to-r hover:from-slate-800/70 hover:to-slate-900/70 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-300">
                      {formation.title}
                    </h3>
                    <p className="text-primary-400 font-medium">{formation.institution}</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <p className="text-sm text-gray-400">{formation.year}</p>
                    <span className="text-xs bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full">
                      {formation.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300">{formation.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}



