import { Component, OnInit } from '@angular/core';
import { IProduct } from './Iproduct'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'TShirt Sample - Directives and Pipes';
  imageHeight = 40;
  imageWidth = 40;
  searchText : number;
  toggleImage :boolean;
  products : IProduct[] = [];
  searchProduct ='';

  ngOnInit()
  {
    this.products = this.GetProducts();
    this.toggleImage = false;
  }

  flipImage(eventArgument, imageURL)
  {
    eventArgument.currentTarget.src = imageURL;
  }

  GetProducts() : IProduct[]
  {
    return [
      {
        ID: 1,
        Name: 'Nike Men T -Shirt',
        Quantity: '2500',
        Price: 1200,
        FrontImage: 'assets/resources/White Front.jpg',
        BackImage: 'assets/resources/White Back.jpg'
      },
      {
        ID: 1,
        Name: 'Nike Women T -Shirt',
        Quantity: '500',
        Price: 1300,
        FrontImage: 'assets/resources/Blue Front.jpg',
        BackImage: 'assets/resources/Blue Back.jpg'
      },
      {
        ID: 1,
        Name: 'UCB Women T -Shirt',
        Quantity: '1500',
        Price: 1400,
        FrontImage: 'assets/resources/Black Front.jpg',
        BackImage: 'assets/resources/Black Back.jpg'
      },
      {
        ID: 1,
        Name: 'Roadster Women T -Shirt',
        Quantity: '2000',
        Price: 1000,
        FrontImage: 'assets/resources/Pink Front.jpg',
        BackImage: 'assets/resources/Pink Back.jpg'
        
      },
      {
        ID: 1,
        Name: 'Mango Women T -Shirt',
        Quantity: '250',
        Price: 1800,
        FrontImage: 'assets/resources/Yellow Front.jpg',
        BackImage: 'assets/resources/Yellow Back.jpg'
      }];
  }
}
