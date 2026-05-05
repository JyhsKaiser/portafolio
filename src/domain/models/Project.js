export class Project {
    constructor({ id, title, stack, challenge, solution, impact, images }) {
        this.id = id;
        this.title = title;
        this.stack = stack;
        this.challenge = challenge;
        this.solution = solution;
        this.impact = impact;
        this.images = images || []; // Array de rutas a tus imágenes .webp
    }
}