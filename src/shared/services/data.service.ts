import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Shared Order
  private orderSource: BehaviorSubject<Order> = new BehaviorSubject(new Order);
  currentOrder: Observable<Order> = this.orderSource.asObservable();

  //Shared Check
  private myTapSource = new BehaviorSubject(0);
  currentTap = this.myTapSource.asObservable();

  constructor() { }

  //Adds product price
  changeCurrentTapAdd(valor: number){
    let acumulate = this.myTapSource.getValue();
    acumulate += valor;

    this.myTapSource.next(acumulate);
  }

  //Removes product  price
  changeCurrentTapRmv(valor: number){
    let acumulate = this.myTapSource.getValue();
    acumulate -= valor;

    this.myTapSource.next(acumulate);
  }

  changeOrderAdd(productReceived: Product){
    let prd = new Product;
    prd.id = productReceived.id;
    prd.name = productReceived.name;
    prd.price = productReceived.price;
  

   this.orderSource.value.products.push(prd);

   //Refresh current tap
   this.changeCurrentTapAdd(productReceived.price)
 }

 changeOrderRmv(productRemoved: Product){    
   for(let i = 0; i < this.orderSource.value.products.length; i++){
     if(this.orderSource.value.products[i].id == productRemoved.id && this.orderSource.value.products[i].name == productRemoved.name){
       this.orderSource.value.products.splice(i, 1);
     }
   }
   
   this.changeCurrentTapRmv(productRemoved.price);
 }
}
