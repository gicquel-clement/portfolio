'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CVPage() {
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
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
        >
          Mon CV
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white mb-8"
        >
          Téléchargez ou consultez mon curriculum vitae
        </motion.p>

        {/* Section Téléchargement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-slate-600/20 to-slate-700/20 rounded-lg p-8 border border-slate-500/30 mb-12 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold mb-4 text-electric-300">📥 Télécharger mon CV</h2>
          <p className="text-white mb-6">
            Vous pouvez télécharger mon CV en format PDF pour consultation offline ou impression.
          </p>
          <motion.a
            href="/CV-Gicquel Clement.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2" />
            </svg>
            Télécharger le CV (PDF)
          </motion.a>
        </motion.div>


        {/* Résumé Professionnel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-electric-300">👤 Résumé Professionnel</h2>
          <div className="bg-slate-800/50 rounded-lg p-6 border border-electric-500/20 backdrop-blur-sm">
            <p className="text-white leading-relaxed">
              <strong>Poste :</strong> Technicien informatique en alternance<br />
              <strong>Entreprise :</strong> Panpharma (DSI / Infrastructure, secteur pharmaceutique, ~600 collaborateurs, international)<br />
              <strong>Période :</strong> Depuis octobre 2024<br />
              <strong>Environnement :</strong> Exigences élevées en sécurité, conformité et continuité de service
            </p>
            <p className="text-white leading-relaxed mt-4">
              <strong>Missions principales :</strong><br />
              Support utilisateurs via outil de ticketing, administration de postes Windows (10/11), gestion du parc informatique (PC, smartphones, imprimantes), déploiement et configuration via Microsoft Intune & Autopilot, administration Active Directory / Entra ID (Azure AD), gestion des identités et accès, sécurisation des postes (BitLocker, EDR, conformité), rédaction de procédures techniques, audits via PowerShell, et participation à des projets techniques transverses.
            </p>
            <p className="text-white leading-relaxed mt-4">
              <strong>Compétences développées :</strong> Gestion de parc, sécurité, automatisation, documentation, support N1/N2, priorisation, communication, rigueur et traçabilité.
            </p>
          </div>
        </motion.section>

        {/* Informations de Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-electric-300"> Coordonnées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-slate-800/50 rounded-lg p-4 border border-electric-500/20 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a href="mailto:clementgicquel24@gmail.com" className="text-white hover:text-electric-400 transition-colors">
                clementgicquel24@gmail.com
              </a>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-slate-800/50 rounded-lg p-4 border border-electric-500/20 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-white mb-2">Téléphone</h3>
              <p className="text-white">
                Sur demande
              </p>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-slate-800/50 rounded-lg p-4 border border-electric-500/20 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/clement-gicquel5635" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-electric-400 transition-colors flex items-center gap-2"
              >
                clement-gicquel5635
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
                </svg>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-slate-800/50 rounded-lg p-4 border border-electric-500/20 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-white mb-2">Localisation</h3>
              <p className="text-white">Bretagne, France</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Lien vers Parcours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white mb-4">Vous pouvez aussi consulter mon parcours détaillé :</p>
          <Link href="/parcours">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-electric-500/20 hover:bg-electric-500/30 text-electric-400 border border-electric-500/50 font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Voir mon Parcours
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}



