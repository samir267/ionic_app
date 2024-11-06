
export class Course {
  title: string;
  author: string;
  image: string;
  keywords: string;

  constructor(title: string = '', author: string = '', image: string = '', keywords: string = '') {
    this.title = title;
    this.author = author;
    this.image = image;
    this.keywords = keywords;
  }
}
