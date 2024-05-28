import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto:any = {}

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService
  ) { 
    this.activatedRoute.params.subscribe(params=>{
      this.producto = this._productsService.getProduct(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
