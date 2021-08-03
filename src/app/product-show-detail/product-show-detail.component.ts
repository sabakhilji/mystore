import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-show-detail',
  templateUrl: './product-show-detail.component.html',
  styleUrls: ['./product-show-detail.component.css']
})
export class ProductShowDetailComponent implements OnInit {
  
  //@Input() product:Product;
  //@Output() showproductdetails:EventEmitter<Product>=new EventEmitter;
  constructor(private productsservice:ProductsService,private httpclient:HttpClient) {
    
      
     
    
        }

  ngOnInit(): void {
    
  }
  /*showdetails(product:Product):void{
    this.showproductdetails.emit(product);
  
  }*/
}
