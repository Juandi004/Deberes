export class Superhero {
    constructor(
      public name: string,
      public alias: string,
      public powers: string[],
      public city: string
    ) {}
  
    fightCrime(): string {
      return `${this.alias} is fighting crime in ${this.city}!`;
    }
  
    displayPowers(): string {
      return `${this.alias} has the following powers: ${this.powers.join(', ')}.`;
    }
  }
  