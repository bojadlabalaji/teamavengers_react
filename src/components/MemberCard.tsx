import React from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from '../data/teamMembers';

interface MemberCardProps {
  member: TeamMember;
  className?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, className = '' }) => {
  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col 
                    transform transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-750">
      {/* Top Section */}
      <div className="flex-shrink-0 text-center">
        <img
          src={member.profile}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover
                     ring-4 ring-gray-100 dark:ring-gray-700
                     transform transition-all duration-300
                     hover:ring-blue-100 dark:hover:ring-blue-900"
        />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2
                       transition-colors duration-300
                       hover:text-blue-600 dark:hover:text-blue-400">
          {member.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{member.title}</p>
        
        {/* Social Links & Location Row */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {member.location && (
            <div className="flex items-center text-gray-600 dark:text-gray-400 
                          transition-colors duration-300
                          hover:text-blue-600 dark:hover:text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ml-1 text-sm">{member.location.name}</span>
            </div>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 
                       transition-transform duration-300
                       hover:text-gray-900 dark:hover:text-white hover:scale-110"
              title="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 
                       transition-transform duration-300
                       hover:text-gray-900 dark:hover:text-white hover:scale-110"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Middle Section - will expand to fill available space */}
      <div className="flex-grow flex flex-col gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full
                         transition-all duration-300
                         hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {member.interests.map((interest) => (
              <span
                key={interest}
                className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-sm rounded-full
                         transition-all duration-300
                         hover:bg-green-200 dark:hover:bg-green-800 hover:scale-105"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;