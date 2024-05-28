import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productos:Product[]=[]
  termino:string | any

  constructor( private activatedRoute:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.productos = this.productService.buscarProductos( params['termino'] );
      console.log( this.productos );
    });
  }

}
