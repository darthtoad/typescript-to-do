export class Task {
  public done: boolean = false;
  constructor(public name: string, public description: string, public priority: number) { }
}
