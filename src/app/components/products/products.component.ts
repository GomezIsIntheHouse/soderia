import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, Product } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];

  constructor(private _productoService:ProductsService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.productos = this._productoService.getProducts();
  }

  verProducto(idx:number){
    this.router.navigate(['/producto', idx]);
  }

}
