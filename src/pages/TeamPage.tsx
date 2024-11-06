import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamMembers';
import MemberCard from '../components/MemberCard';

const TeamPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Earth's mightiest developers, united to develop our world to make it a better place beyond imagination.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <MemberCard member={member} className="flex flex-col h-full bg-white shadow-md rounded-lg p-6 flex-grow" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
