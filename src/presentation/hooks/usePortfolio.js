import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';

export const usePortfolio = () => {
    const [data, setData] = useState({
        hero: null,
        projects: [],
        experience: [],
        techStack: null,
        footer: null,
        loading: true
    });

    useEffect(() => {
        // Simulamos una obtención de datos (que actualmente es síncrona)
        const hero = PortfolioRepository.getHeroData();
        const projects = PortfolioRepository.getProjects();
        const experience = PortfolioRepository.getExperience();
        const techStack = PortfolioRepository.getTechStack();
        const footer = PortfolioRepository.getFooterData();

        setData({
            hero,
            projects,
            experience,
            techStack,
            footer,
            loading: false
        });
    }, []);

    return data;
};