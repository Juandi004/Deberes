export class Robot {
    static namesBeingUsed: string[] = [];
    myName: string = "";
    constructor() {
      this.resetName();
    }
    public get name(): string {
      return this.myName;
    }
    public resetName(): void {
      let newName: string = "";
      while (Robot.namesBeingUsed.includes(newName) || newName === "") {
        newName +=
          String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
          String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        newName += Math.floor(Math.random() * 1000).toString();
      }
      Robot.namesBeingUsed.push(newName);
      this.myName = newName;
    }
    public static releaseNames(): void {
      console.log(Robot.namesBeingUsed.join(', '))
    }
  }