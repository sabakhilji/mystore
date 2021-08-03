import { Component, OnInit } from '@angular/core';
import { Product}from '../products'
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[] 
  
  constructor(private http:HttpClient,private productsservice:ProductsService) { }

  ngOnInit(): void {
    this.productsservice.getProducts().subscribe(res=>{
      
      console.log(res)
      this.products=res})
    
  }
 showproductdetails(product:Product):void{
   this.products=this.products.filter(p=>p.id==product.id)
  //this.productsservice.getProducts().subscribe(res=>this.p)
  
 }
}
