import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products/id")
  }
}
