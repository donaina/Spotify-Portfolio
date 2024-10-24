import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Github,
  Linkedin,
  Mail,
  Music2,
  User
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const navItems = [
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-zinc-900 p-6">
      <div className="flex items-center gap-2 mb-8">
        <Music2 className="h-8 w-8 text-green-500" />
        <h1 className="text-xl font-bold">Ayoola Aina</h1>
      </div>
      
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveSection(item.id)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:ayoolaina@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}