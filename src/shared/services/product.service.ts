import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product';

import { catchError, retry } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ProductList } from '../model/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://localhost:8080/products';

  constructor( private http: HttpClient ) { }

  getProductList(): Observable<ProductList>{
    return this.http.get<ProductList>(`${this.productUrl}`) 
        .pipe(
          retry(2),
          catchError(this.handleError)
        );             
  }

  private handleError(error: HttpErrorResponse){
    if( error.error instanceof ErrorEvent){
      console.error('Client Side Error: ', error.error.message);
    } else {
      console.error('Server Side Error: ', error);
    }

    return throwError('Was not possible to get product list.');
  }
}
