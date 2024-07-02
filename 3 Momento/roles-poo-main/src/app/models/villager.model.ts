

export class Villager {
    constructor(
      public name: string,
      public age: number,
      public city: string
    ) {}
  
    dominate(): string {
      return `${this.name} is beign dominated by : `;
    }
}
  