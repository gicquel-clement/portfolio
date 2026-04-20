'use client'

import { motion } from 'framer-motion'

export default function CompetencesPage() {
  const competencies = [
    {
      category: 'Gestion & Sécurisation du Parc Informatique',
      icon: '🖥️',
      color: 'from-teal-500 to-cyan-600',
      skills: [
        'Microsoft Intune / Endpoint Manager',
        'Windows Autopilot',
        'Déploiement et administration de postes',
        'Gestion de smartphones (MDM)',
        'Sécurité poste de travail (BitLocker, EDR, conformité)',
        'Inventaire, renouvellement, recyclage matériel'
      ]
    },
    {
      category: 'Administration Systèmes & Identités',
      icon: '🔐',
      color: 'from-emerald-500 to-teal-600',
      skills: [
        'Active Directory / Entra ID (Azure AD)',
        'Gestion des identités, droits et accès',
        'GPO (inscription MDM, sécurité, conformité)',
        'Administration Windows 10/11',
        'Packaging Win32, mode kiosque',
        'Supervision centralisée, audits'
      ]
    },
    {
      category: 'Automatisation & Documentation',
      icon: '⚙️',
      color: 'from-violet-500 to-violet-600',
      skills: [
        'PowerShell (audit, automatisation, scripts)',
        'Rédaction de procédures techniques',
        'Documentation systématique',
        'Communication et formation utilisateurs'
      ]
    },
    {
      category: 'Support Utilisateurs & Continuité de Service',
      icon: '🛠️',
      color: 'from-teal-600 to-emerald-700',
      skills: [
        'Support N1 / N2 via outil de ticketing',
        'Diagnostic incidents matériels / logiciels',
        'Gestion des tickets et priorisation',
        'Dépannage réseau, imprimantes, postes',
        'Réinitialisation comptes, mots de passe',
        'Traçabilité et rigueur opérationnelle'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Titre Principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Mes Compétences
          </h1>
          <p className="text-lg text-white">
            Expertise technique en gestion d'infrastructure IT et support utilisateurs
          </p>
        </motion.div>

        {/* Grille de Compétences */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {competencies.map((comp, index) => (
            <motion.div
              key={comp.category}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(11, 165, 255, 0.2)'
              }}
              className="relative group"
            >
              {/* Fond avec dégradé */}
              <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300`} />
              
              {/* Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-violet-400/50 group-hover:border-violet-500/50 transition-all duration-300 h-full">
                
                {/* Icône et Titre */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-4xl p-3 rounded-xl bg-slate-700/50 group-hover:bg-violet-700 transition-all"
                  >
                    {comp.icon}
                  </motion.div>
                  <h2 className="text-xl font-bold text-white pt-1 group-hover:text-violet-400 transition-colors">
                    {comp.category}
                  </h2>
                </div>

                {/* Barre de décoration */}
                <div className={`h-1 w-12 bg-gradient-to-r ${comp.color} rounded-full mb-6 group-hover:w-24 transition-all duration-300`} />

                {/* Liste de Compétences */}
                <motion.ul className="space-y-3">
                  {comp.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      {/* Checkmark */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="mt-1 flex-shrink-0"
                      >
                        <svg className="w-5 h-5 text-violet-400 group-hover/item:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <span className="text-white group-hover/item:text-white transition-colors leading-relaxed">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-slate-800/20 border border-primary-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-400">4</p>
              <p className="text-white text-sm mt-1">Catégories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-400">20+</p>
              <p className="text-white text-sm mt-1">Compétences</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-400">18m</p>
              <p className="text-white text-sm mt-1">Expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-400">∞</p>
              <p className="text-white text-sm mt-1">Apprentissage</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
