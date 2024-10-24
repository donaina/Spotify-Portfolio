import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from '@/components/Sidebar';
import { ProfileSection } from '@/components/ProfileSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'education':
        return <EducationSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="ml-64 p-8">
        <ScrollArea className="h-[calc(100vh-4rem)]">
          {renderSection()}
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;