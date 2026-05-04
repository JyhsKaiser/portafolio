import { portfolioData } from '../sources/localData';
import { Project } from '../../domain/models/Project';
import { Experience } from '../../domain/models/Experience';

export const PortfolioRepository = {
    getHeroData: () => {
        return portfolioData.hero;
    },

    getProjects: () => {
        return portfolioData.projects.map(p => new Project(p));
    },

    getExperience: () => {
        return portfolioData.experience.map(e => new Experience(e));
    },

    getTechStack: () => {
        return portfolioData.techStack;
    },

    getFooterData: () => {
        return portfolioData.footer;
    }
};