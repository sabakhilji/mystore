import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-show-detail',
  templateUrl: './product-show-detail.component.html',
  styleUrls: ['./product-show-detail.component.css']
})
export class ProductShowDetailComponent implements OnInit {
  
  @Input() product:Product;
  @Output() showproductdetails:EventEmitter<Product>=new EventEmitter;
  constructor() {
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
