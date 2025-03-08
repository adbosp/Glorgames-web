import React from 'react';
import { TeamMember } from '../types';

const TEAM_MEMBERS: TeamMember[] = [
//
];

export function About() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of gamers and developers dedicated to creating
            unforgettable gaming experiences that push the boundaries of innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {TEAM_MEMBERS.map(member => (
            <div key={member.id} className="text-center card-hover">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full" />
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover relative z-10"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-800 mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}