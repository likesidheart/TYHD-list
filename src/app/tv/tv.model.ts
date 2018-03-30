export class TV {
  public name: string;
  public description: string;
  public imagePath: string;
  public year: string;
  public rating: string;

  constructor(name: string, desc: string, imagePath: string, year: string, rating: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.year = year;
    this.rating = rating;
  }
}


