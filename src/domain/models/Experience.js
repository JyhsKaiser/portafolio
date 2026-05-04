export class Experience {
    constructor({ id, role, institution, period, challenge, impact }) {
        this.id = id;
        this.role = role;
        this.institution = institution;
        this.period = period;
        this.challenge = challenge;
        this.impact = impact; // Array de strings con los logros
    }
}