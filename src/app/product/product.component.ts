import { Component, OnInit } from '@angular/core';
import productData from '../product.json';
import { ProductService } from '../product.service';
interface product{
  id:number;
  product_name: string,
  product_description: string,
  product_img: string,
  product_price:number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  products:product[] = productData;
  ngOnInit(): void {
  }

}
