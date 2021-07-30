import { Component } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mystore';
  
}
