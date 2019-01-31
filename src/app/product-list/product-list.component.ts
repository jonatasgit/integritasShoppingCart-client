import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/model/product';
import { DataService } from 'src/shared/services/data.service';
import { ProductService } from 'src/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  message: string;
  constructor(private dataService: DataService, private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProductList().subscribe(
      data => { this.productList = data.content},
      error => { this.message = error}
    );
    
  }

  onClickAddProduct(receivedProduct: Product){
    this.dataService.changeOrderAdd(receivedProduct);
  }

}
