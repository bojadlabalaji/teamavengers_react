import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Rocket } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Pomodoro Timer",
    description: "A productivity tool designed to help users maintain focus and manage time effectively using the Pomodoro Technique. Features customizable time intervals, break reminders, and progress tracking.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=60",
    status: "Completed",
    link: "https://bojadlabalaji.github.io/pomodoro-app/",
    features: [
      "Customizable time intervals",
      "Break reminders",
      "Progress tracking",
      "Task Repeater"
    ]
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions developed by Earth's mightiest developers.
          </p>
        </motion.div>
        <div className="grid gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-red-500" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">Status: {project.status}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Rocket className="mr-2" size={20} />
                      Key Features
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;