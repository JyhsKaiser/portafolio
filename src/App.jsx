import { HeroView } from './presentation/views/HeroView';
import { TechStackView } from './presentation/views/TechStackView'; // Importación
import { ProjectsView } from './presentation/views/ProjectsView';
import { ExperienceView } from './presentation/views/ExperienceView';
import { FooterView } from './presentation/views/FooterView';
import { Navbar } from './presentation/components/layout/Navbar';
import { WhatsAppButton } from './presentation/components/ui/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-base relative">
      <Navbar />

      {/* El pt-20 compensa la altura del Navbar fijo */}
      <main className="pt-20 mx-4 md:mx-20 lg:mx-50">
        <HeroView />

        <ProjectsView />
        <ExperienceView />
        <TechStackView />

      </main>
      <FooterView />

      <WhatsAppButton />
    </div>
  );
}

export default App;