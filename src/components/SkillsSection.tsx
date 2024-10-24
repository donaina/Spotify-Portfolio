import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2 } from 'lucide-react';

const skills = [
  'Database Management (MSSQL & MySQL)',
  'Database Backup & Replication',
  'Core Banking System Administration',
  'Application Support',
  'JIRA & Test-Rail',
  'O365 Management',
  'Manual Testing',
  'Technical Support',
  'User Acceptance Testing (UAT)',
  'Network Administration',
  'ISO27001 Implementation',
  'Disaster Recovery Planning'
];

export function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="p-4 bg-zinc-900 border-zinc-800">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-green-500" />
                <span className="font-medium">{skill}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}