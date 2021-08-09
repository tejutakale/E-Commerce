import { Component, OnInit } from '@angular/core';
import productData from '../product.json';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
interface product{
  id:number;
  product_name: string,
  product_description: string,
  product_img: string,
  product_price:number
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit {
id:any;
Response:any;
singleproduct:any;
products:product[] = productData;
  constructor( private route:ActivatedRoute,
    
    private ProductService:ProductService
    
    ) { 
   
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);

   this.id=this.route.snapshot.params['id'];
   this.getProduct();
   console.log("hi" +this.id);
  }
 
  getProduct(){
   // alert(this.id);
    // let singleproduct = this.ProductService.getProduct(this.id);
    // console.log(singleproduct);
    // console.log();
    
   // alert(singleproduct);
    this.ProductService.getProduct(this.id).subscribe(singleproduct =>{
     // alert(this.id);
      this.singleproduct = singleproduct.id;
      console.log("hi method " +this.id);
   });
    
    

 

}

  

}
