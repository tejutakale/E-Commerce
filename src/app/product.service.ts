import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import productData from './product.json';
import { from, Observable, throwError } from 'rxjs';


interface product{
  id:number;
  product_name: string,
  product_description: string,
  product_img: string,
  product_price:number
}
@Injectable({
  providedIn: 'root'
})

export class ProductService {
id:any;


  constructor(private http: HttpClient) { }
  productUrl = 'http://localhost:4200/product_details';
  products:product[] = productData;


/** GET hero by id. Will 404 if id not found */
getProduct(id: number): Observable<product> {
  const url = `${this.productUrl}/${id}`;
  console.log(url);
  return this.http.get<product>(url);
  
}

  
}
