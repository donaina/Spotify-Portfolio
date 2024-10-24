import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const experiences = [
  {
    title: 'Digital Transformation & CBA Admin',
    company: 'KATSU Network Limited',
    period: 'June 2024 to Present',
    description: 'Spearheading digital transformation initiatives across Sabi Africa and KATSU Microfinance Bank.',
    highlights: [
      'Manage core banking system at KATSU Microfinance Bank',
      'Oversee Fintech services integration into Sabi Africa\'s platform',
      'Enhance efficiency and scalability of financial services'
    ]
  },
  {
    title: 'Application Support Engineer',
    company: 'VFD Tech',
    period: 'November 2023 to May 2024',
    description: 'Provided comprehensive support for Banking as a service solution.',
    highlights: [
      'Managed inbound and outbound transactions',
      'Provided 1st level support for expense portal',
      'Delivered daily transaction analysis reports'
    ]
  },
  {
    title: 'Team Lead Application Support & DBA',
    company: 'Abbey Mortgage Bank PLC',
    period: 'February 2022 to October 2023',
    description: 'Led application support and database administration initiatives.',
    highlights: [
      'Maintained database availability and managed user access',
      'Led disaster recovery planning and implementation',
      'Developed test plans using Test-Rail & JIRA'
    ]
  }
];

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <h3 className="text-xl font-semibold text-green-500">{exp.title}</h3>
            <p className="text-zinc-400">{exp.company} • {exp.period}</p>
            <p className="mt-2">{exp.description}</p>
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-green-500" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}