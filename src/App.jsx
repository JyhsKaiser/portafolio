import React from 'react';
import { HeroView } from './presentation/views/HeroView';
import { ProjectsView } from './presentation/views/ProjectsView';
import { ExperienceView } from './presentation/views/ExperienceView';

function App() {
  return (
    <div className="min-h-screen bg-base">
      <main>
        <HeroView />
        <ProjectsView />
        <ExperienceView />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;