import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  listaProducts: product[] = [
    {id: 1, name: 'Coca Cola', description: 'bedida azukar', price: 5, stock: 200},
    {id: 2, name: 'Corona', description: 'bedida alcohol', price: 5, stock: 300},
  ]

  constructor(private _productService : ProductService) {}
    ngOnInit(): void {
      this.getListProducts();
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
    }
    getListProducts(){
      this._productService.getListProducts().subscribe((data) => {
        console.log(data);
      })
    }
    
}
