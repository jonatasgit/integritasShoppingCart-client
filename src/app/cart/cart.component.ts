import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';
import { Order } from 'src/shared/model/order';
import { Product } from 'src/shared/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myOrder: Order;
  myTap: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentOrder.subscribe(data => this.myOrder = data);
    this.dataService.currentTap.subscribe(data => this.myTap = data);
  }

  onClickRemoveProduct(removedProduct: Product){
    this.dataService.changeOrderRmv(removedProduct);
  }

  onClickCheckout(){
    
  }
}
