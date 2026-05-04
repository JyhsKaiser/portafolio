export class Project {
    constructor({ id, title, stack, challenge, solution, impact }) {
        this.id = id;
        this.title = title;
        this.stack = stack; // Array de strings
        this.challenge = challenge;
        this.solution = solution;
        this.impact = impact;
    }
}