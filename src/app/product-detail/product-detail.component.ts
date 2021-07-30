import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 @Input() product:Product;
 @Output() showproductdetails:EventEmitter<Product>=new EventEmitter;
  constructor(private http:HttpClient,private productsservice:ProductsService) { 
    this.product={
      id:0,
      name:"toy",
      price:20,
      url:"",
      description:"kids toy for 1 year old",
    }
  }

  ngOnInit(): void {
  }

  showdetails(product:Product):void{
    this.showproductdetails.emit(product);

}
}
