import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-show-detail',
  templateUrl: './product-show-detail.component.html',
  styleUrls: ['./product-show-detail.component.css']
})
export class ProductShowDetailComponent implements OnInit {
  products:Product[]|undefined;
  id:string|null="0";
  
  
  //@Output() showproductdetails:EventEmitter<Product>=new EventEmitter;
  constructor(private _Activatedroute:ActivatedRoute, private _router:Router,
    private _productService:ProductsService, private location: Location) { 
     
      
    }
      
     
    
        

 
  /*showdetails(product:Product):void{
    this.showproductdetails.emit(product);
  
  }*/

ngOnInit():void{
  this._Activatedroute.paramMap.subscribe(params=>this.id=params.get('id'));
  console.log(this.id)
  this._productService.getProducts().subscribe(res=>{
  this.products=res.filter(p=>p.id==this.id);
  console.log(this.products)  
  
  //this.product=this.product.find(p => p.id==this.id);
})

}
goBack(): void {
  this.location.back();
}
}