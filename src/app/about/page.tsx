"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-8">
      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
        >
          À propos de moi
        </motion.h1>
        
        <motion.div
          variants={itemVariants}
          whileHover={{ borderColor: 'rgb(99, 102, 241)', boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)' }}
          className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg mb-8 border border-gray-700 transition-all duration-300"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mb-6 text-white"
          >
            Mon Parcours
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed mb-6"
          >
            Je suis technicien informatique en alternance chez Panpharma depuis 2024 en formation BTS SIO Option SISR. J'évolue au sein de l'équipe IT où je participe au support utilisateurs, à la gestion et à l'administration du parc informatique, ainsi qu'au déploiement et à la maintenance des postes de travail et des outils métiers.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed mb-6"
          >
            J'interviens sur le déploiement et l'administration de postes Windows (avec Intune et Autopilot), la gestion quotidienne d'Active Directory (comptes, groupes, GPO), le support N1/N2 via GLPI pour la résolution d'incidents, et l'assistance sur les systèmes et réseaux en environnement de production.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed"
          >
            Cette alternance me permet de consolider mes compétences techniques en infrastructure IT tout en développant une approche rigoureuse et professionnelle du métier de technicien systèmes et réseaux.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg border border-gray-700"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mb-6 text-white"
          >
            Mes Compétences Clés
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10, borderColor: 'rgb(99, 102, 241)' }}
              className="border-l-4 border-primary-500 pl-4 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-2">Systèmes & Administration</h3>
              <ul className="text-gray-300 space-y-2">
                <motion.li variants={itemVariants}>• Windows Server & Active Directory</motion.li>
                <motion.li variants={itemVariants}>• Microsoft Intune (MDM, Autopilot)</motion.li>
                <motion.li variants={itemVariants}>• DNS, DHCP, Configuration système avancée</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10, borderColor: 'rgb(99, 102, 241)' }}
              className="border-l-4 border-primary-500 pl-4 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-2">Réseaux & Infrastructure</h3>
              <ul className="text-gray-300 space-y-2">
                <motion.li variants={itemVariants}>• Adressage IPv4 & Configuration IP</motion.li>
                <motion.li variants={itemVariants}>• VLAN & Inter-VLAN</motion.li>
                <motion.li variants={itemVariants}>• Notions de DMZ et sécurité réseau</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10, borderColor: 'rgb(99, 102, 241)' }}
              className="border-l-4 border-primary-500 pl-4 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-2">Outils & Logiciels</h3>
              <ul className="text-gray-300 space-y-2">
                <motion.li variants={itemVariants}>• GLPI (Gestion de parc IT)</motion.li>
                <motion.li variants={itemVariants}>• PowerShell (Scripts d'administration)</motion.li>
                <motion.li variants={itemVariants}>• Docker (notions)</motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10, borderColor: 'rgb(99, 102, 241)' }}
              className="border-l-4 border-primary-500 pl-4 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-2">Support & Déploiement</h3>
              <ul className="text-gray-300 space-y-2">
                <motion.li variants={itemVariants}>• Support N1/N2 via ticketing</motion.li>
                <motion.li variants={itemVariants}>• Déploiement de postes Windows</motion.li>
                <motion.li variants={itemVariants}>• Gestion des incidents et demandes</motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
