export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public year: number;

  constructor(name: string, desc: string, imagePath: string, year: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.year = year;
  }
}


