export class Major {
    constructor(
      public name: string,
      public alias: string,
      public age: number,
      public city: string
    ) {}              
  
    dominate(): string {
      return `${this.alias} is dominating : ${this.city}!`;
    }
}
  