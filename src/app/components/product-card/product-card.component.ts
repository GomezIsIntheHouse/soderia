import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() producto:any = {};
  @Input() index: number | any;
  @Output() productoSeleccionado: EventEmitter<number>;   //este es una comunicacion de hijo a padre (desde componente a componente)

  constructor(private router:Router) {
    this.productoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {

  }

  verProducto(){
    this.router.navigate(['/producto', this.index]);
  }

}
