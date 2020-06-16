export class MenuItem {
  name: string;
  description: string;
  isLiked: boolean;
  price: number;


  constructor(name: string, description: string, isLiked: boolean, price: number) {
    this.name = name;
    this.description = description;
    this.isLiked = isLiked;
    this.price = price;
  }
}
