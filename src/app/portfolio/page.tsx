'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Application E-commerce',
    description: 'Plateforme e-commerce complète avec gestion de produits, panier et paiement sécurisé.',
    image: '🛒',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Site Portfolio',
    description: 'Portfolio personnel avec animations fluides et design moderne.',
    image: '🎨',
    technologies: ['React', 'Framer Motion', 'Next.js'],
    link: '#'
  },
  {
    title: 'Application Dashboard',
    description: 'Dashboard analytique avec graphiques interactifs et visualisation de données.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Node.js', 'TypeScript'],
    link: '#'
  },
  {
    title: 'Plateforme Blog',
    description: 'Système de blog avec CMS intégré et gestion de contenu dynamique.',
    image: '📝',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Application Chat',
    description: 'Application de messagerie en temps réel avec WebSocket et authentification.',
    image: '💬',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
    link: '#'
  },
  {
    title: 'Site Vitrine',
    description: 'Site vitrine pour entreprise avec galerie et formulaire de contact.',
    image: '🌐',
    technologies: ['Next.js', 'Tailwind CSS', 'Formspree'],
    link: '#'
  }
]

export default function PortfolioPage() {
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
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl w-full"
      >
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
        >
          Mes Projets
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(99, 102, 241, 0.3)' }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <motion.div
                className="p-8 text-6xl text-center bg-gradient-to-br from-gray-700 to-gray-800"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {project.image}
              </motion.div>
              <div className="p-6 flex flex-col flex-grow">
                <motion.h3
                  className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <motion.div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.4)' }}
                      className="text-xs bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full cursor-default transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.link}
                    className="text-center block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors mt-auto font-semibold"
                  >
                    Voir le projet
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
