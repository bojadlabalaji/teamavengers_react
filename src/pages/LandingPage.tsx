import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Map, FolderGit2 } from 'lucide-react';
import TypedTitle from '../components/TypedTitle';
import './LandingPage.css';
import ironmanGif from '../images/ironman.gif';
import capGif from '../images/cap.gif';
import wandaGif from '../images/wanda.gif';
import teamImage from '../images/team.jpeg';
import mapImage from '../images/map.jpeg';
import projectsImage from '../images/projects.jpeg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section with Animations */}
      <div className="hero relative h-screen flex items-center justify-center">
        {/* Character GIFs */}
        <div className="flying-ironman">
          <img
            src={ironmanGif}
            alt="Iron Man Flying"
            className="w-[150px] h-auto"
          />
        </div>

        <div className="running-cap">
          <img
            src={capGif}
            alt="Captain America running"
            className="w-[150px] h-auto"
          />
        </div>

        <div className="floating-wanda">
          <img
            src={wandaGif}
            alt="Wanda floating"
            className="w-[150px] h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="hero-content relative z-10 text-center">
          <TypedTitle
            strings={['TEAM AVENGERS', 'MIGHTIEST DEVELOPERS']}
            className="text-5xl md:text-7xl font-bold text-red-600 dark:text-red-500 mb-4 block"
          />
          <h4 className="hero-subtitle text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
            UC's Mightiest Techies
          </h4>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <Shield className="w-16 h-16 text-red-500 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Elite Team</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Meet Earth's mightiest developers, each bringing unique abilities and expertise to defend our world.
              </p>
              <a
                href="/team"
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Meet the Team
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <img
                src={teamImage}
                alt="Team"
                className="rounded-lg shadow-2xl w-[480px] h-[320px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <Map className="w-16 h-16 text-blue-500 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Global Presence</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Explore our worldwide network of heroes, ready to respond to any threat, anywhere.
              </p>
              <a
                href="/map"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Map
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <img
                src={mapImage}
                alt="Global Map"
                className="rounded-lg shadow-2xl w-[480px] h-[320px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <FolderGit2 className="w-16 h-16 text-yellow-500 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Projects</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Discover the innovative solutions and technologies developed by our team to protect Earth.
              </p>
              <a
                href="/projects"
                className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:w-1/2"
            >
              <img
                src={projectsImage}
                alt="Projects"
                className="rounded-lg shadow-2xl w-[480px] h-[320px] object-cover"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;