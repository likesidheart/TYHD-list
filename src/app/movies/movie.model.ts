export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public year: string;

  constructor(name: string, desc: string, imagePath: string, year: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.year = year;
  }
}


