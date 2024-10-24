import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8">Professional Summary</h2>
      <Card className="p-6 bg-zinc-900 border-zinc-800">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-green-500">Contact</h3>
            <p>📍 Surulere, Lagos, Nigeria</p>
            <p>📱 +2348054771205</p>
            <p>📧 ayoolaina@gmail.com</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-green-500">About</h3>
            <p className="text-zinc-300 leading-relaxed">
              An accomplished IT professional with over 7 years of experience in digital transformation, 
              core banking systems administration, and database management. Expertise in spearheading 
              technology initiatives that enhance operational efficiency and scalability for financial 
              institutions. Proven track record in managing and optimizing core banking systems, providing 
              comprehensive application support, and leading disaster recovery efforts.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-green-500">Certifications</h3>
            <ul className="list-disc list-inside text-zinc-300">
              <li>Database & Data Processing with AWS</li>
              <li>ITIL V4 2021 People Cert- ITIL Foundation Certificate in IT Service Management</li>
              <li>Sophos XG Firewall Administrator</li>
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}