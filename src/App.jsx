import { HeroView } from './presentation/views/HeroView';
import { TechStackView } from './presentation/views/TechStackView';
import { ProjectsView } from './presentation/views/ProjectsView';
import { ExperienceView } from './presentation/views/ExperienceView';
import { FooterView } from './presentation/views/FooterView';
import { Navbar } from './presentation/components/layout/Navbar';
import { WhatsAppButton } from './presentation/components/ui/WhatsAppButton';
import { AIChatbot } from './presentation/components/ui/AIChatbot';

function App() {
  return (
    <div className="min-h-screen bg-base relative">
      <Navbar />
      <main className="pt-20">
        <HeroView />
        <TechStackView />
        <ProjectsView />
        <ExperienceView />
      </main>
      <FooterView />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}

export default App;
