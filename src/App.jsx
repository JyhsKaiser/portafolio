
import { HeroView } from './presentation/views/HeroView';
import { ProjectsView } from './presentation/views/ProjectsView';
import { ExperienceView } from './presentation/views/ExperienceView';
import { FooterView } from './presentation/views/FooterView'; // Añade esta importación

function App() {
  return (
    <div className="min-h-screen bg-base">
      <main>
        <HeroView />
        <ProjectsView />
        <ExperienceView />
      </main>
      <FooterView /> {/* Renderiza el componente */}
    </div>
  );
}

export default App;