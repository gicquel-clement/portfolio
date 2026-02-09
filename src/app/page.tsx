'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 w-full">
      <div className="w-full flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl px-4 w-full"
        >

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-primary-400 via-primary-500 to-blue-600 bg-clip-text text-transparent leading-relaxed"
            whileHover={{ scale: 1.02 }}
          >
            Portfolio Gicquel Clément
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base lg:text-lg mb-12 text-gray-200"
          >
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/portfolio"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 md:px-8 py-3 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Mes Projets
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="bg-gray-800/50 backdrop-blur-sm text-primary-400 border border-primary-500/50 px-6 md:px-8 py-3 rounded-lg hover:bg-gray-700 hover:border-primary-400 transition-all font-semibold"
              >
                Me Contacter
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bloc de présentation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          whileHover={{ borderColor: 'rgb(11, 165, 255)', boxShadow: '0 0 30px rgba(11, 165, 255, 0.3)' }}
          className="w-full max-w-4xl mb-24 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-primary-500/20 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Qui suis-je ?
              </motion.h2>
              <motion.p
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-4"
                variants={itemVariants}
              >
                Je suis <span className="font-semibold text-primary-300">Gicquel Clément</span>, technicien informatique en alternance chez Panpharma. Avec une approche professionnelle et rigoureuse, je participe activement aux opérations IT de l'entreprise.
              </motion.p>
              <motion.p
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
                variants={itemVariants}
              >
                Ma passion pour l'informatique me pousse à développer mes compétences techniques tout en garantissant la fiabilité, la sécurité et la continuité de service.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/30 to-primary-600/30 border border-primary-500/60 rounded-lg hover:border-primary-400 transition-all cursor-default"
                >
                  <span className="text-primary-200 font-semibold text-sm">💼 Alternance Panpharma</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/30 to-primary-600/30 border border-primary-500/60 rounded-lg hover:border-primary-400 transition-all cursor-default"
                >
                  <span className="text-primary-200 font-semibold text-sm">🔧 Technicien IT</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/30 to-primary-600/30 border border-primary-500/60 rounded-lg hover:border-primary-400 transition-all cursor-default"
                >
                  <span className="text-primary-200 font-semibold text-sm">🛡️ Sécurité & Support</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-primary-500/40 to-primary-700/40 border border-primary-500/50 flex items-center justify-center shadow-xl"
              >
                <div className="text-6xl md:text-7xl">👤</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mb-24"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(11, 165, 255, 0.3)',
                borderColor: 'rgb(11, 165, 255)'
              }}
              className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-lg border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-primary-400 mb-4" />
              </motion.div>
              <motion.h3
                className="text-lg md:text-xl font-semibold mb-3 text-white group-hover:text-primary-300"
                whileHover={{ x: 5 }}
              >
                {skill.title}
              </motion.h3>
              <p className="text-sm md:text-base text-gray-300 mb-4">{skill.description}</p>
              <motion.ul
                className="text-xs md:text-sm text-gray-400 space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {skill.technologies.map((tech, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-center hover:text-primary-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{tech}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  )
}

const skills = [
  {
    title: 'Support Utilisateur',
    description: 'Prise en charge des demandes d\'assistance, résolution d\'incidents et support technique.',
    technologies: [
      'Ticketing Système',
      'Assistance à distance',
      'Diagnostic matériel',
      'Documentation'
    ],
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.769-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0c.94-.935 1.856-1.925 2.742-2.958m-2.742 2.958c.52 1.03.97 2.082 1.35 3.162"
        />
      </svg>
    ),
  },
  {
    title: 'Administration Système',
    description: 'Gestion et maintenance du parc informatique, configuration et administration des systèmes.',
    technologies: [
      'Windows Server',
      'Active Directory',
      'Gestion de parc IT',
      'Virtualisation'
    ],
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: 'Sécurité & Maintenance',
    description: 'Déploiement, maintenance et sécurisation du parc informatique et des données.',
    technologies: [
      'Sécurité Informatique',
      'Maintenance préventive',
      'Sauvegarde & Restauration',
      'Conformité IT'
    ],
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
]

const portfolioProjects = [
  {
    id: 1,
    title: 'Gestion du Parc Informatique',
    description: 'Solution complète de gestion et suivi du parc IT chez Panpharma.',
    icon: '�',
    tags: ['Ticketing', 'Gestion de parc', 'Administration'],
    link: '#',
  },
  {
    id: 2,
    title: 'Support Utilisateurs',
    description: 'Assistance technique et résolution d\'incidents en environnement exigeant.',
    icon: '🆘',
    tags: ['Support', 'Diagnostic', 'Assistance'],
    link: '#',
  },
  {
    id: 3,
    title: 'Déploiement & Maintenance',
    description: 'Déploiement de postes et maintenance du parc informatique.',
    icon: '�',
    tags: ['Déploiement', 'Maintenance', 'Configuration'],
    link: '#',
  },
  {
    id: 4,
    title: 'Sécurité Informatique',
    description: 'Implémentation des meilleures pratiques de sécurité et conformité IT.',
    icon: '🔐',
    tags: ['Sécurité', 'Conformité', 'Sauvegarde'],
    link: '#',
  },
]