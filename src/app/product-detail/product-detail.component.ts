import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 @Input() product:Product;
 @Output() showProductdetails:EventEmitter<Product>=new EventEmitter;
  constructor(private http:HttpClient,private productsservice:ProductsService,public router: Router) { 
    this.product={
      id:"0",
      name:"toy",
      price:20,
      url:"",
      description:"kids toy for 1 year old",
    }
  }

  ngOnInit(): void {
  }

  showdetails(product:Product):void{
    this.showProductdetails.emit(product);

}
}
