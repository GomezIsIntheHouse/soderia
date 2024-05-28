import { Injectable } from '@angular/core';

export interface Product{
  nombre: string;
  bio: string;
  img: string;
  promo:string,
  capacidad: string; 
  precio: number;
  idx?: number;
};


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products:Product[] = [
    {
      nombre: "Agua envasada",
      bio: "El agua de Sodería Los Primos esta filtrada naturalmente. Mediante 5 procesos distintos de filtrado, nos permite darte la mejor calidad y un sabor inigualable para vos y tu familia",
      img: "assets/img/bidon_agua.jpg",
      capacidad: "5 Litros",
      precio: 1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',
      },
    {
      nombre: "Agua envasada",
      bio: "El agua de Sodería Los Primos esta filtrada naturalmente. Mediante 5 procesos distintos de filtrado, nos permite darte la mejor calidad y un sabor inigualable para vos y tu familia",
      img: "assets/img/bidon_agua.jpg",
      capacidad: "20 Litros",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',

      },
    {
      nombre: "Soda envasada por Unidad",
      bio: "El agua con la que se fabrica la soda esta filtrada mediante 5 procesos distintos para garantizarte la mejor calidad",
      img: "assets/img/sifon_2.jpg",
      capacidad: "1.250 ml",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',

      },
    {
      nombre: "Soda Envasada por Cajon",
      bio: "El agua con la que se fabrica la soda esta filtrada mediante 5 procesos distintos para garantizarte la mejor calidad.",
      img: "assets/img/cajon_soda.jfif",
      capacidad: "7.5 L",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',

      
    },
    {
      nombre: "Dispenser Simple",
      bio: "El dispenser de agua de Soderia Los Primos combina elegancia y funcionalidad. Con su diseño moderno y compacto, se adapta a cualquier espacio. Hidratate con estilo!!",
      img: "assets/img/dispenser_simple.jpg",
      capacidad: "5L",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',

    },
    {
      nombre: "Dispenser de Pie",
      bio: "Ofrece agua fría y caliente al instante, ideal para oficinas y hogares. Su fácil mantenimiento y sistema de seguridad para niños garantizan comodidad y tranquilidad. ¡Hidrátate con estilo!",
      img: "assets/img/dispenser_de_pie.jpg",
      capacidad: "De 5 L a 40 L",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',
       },
    {
      nombre: "Jugo de Mesa Saldán Naranja",
      bio: "Disfruta del delicioso jugo de mesa de Soderia Los Primos. Elaborado con frutas frescas y seleccionadas, ofrece un sabor natural y refrescante. Perfecto para acompañar tus comidas o como una bebida revitalizante en cualquier momento del día. Sin conservantes ni aditivos, puro y saludable. ¡Prueba la frescura en cada sorbo!",
      img: "assets/img/jugo_saldan.jpg",
      capacidad: "1L",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',

    },
    {
      nombre: "Jugo de Mesa Saldán Pomelo",
      bio: "Disfruta del delicioso jugo de mesa de Soderia Los Primos. Elaborado con frutas frescas y seleccionadas, ofrece un sabor natural y refrescante. Perfecto para acompañar tus comidas o como una bebida revitalizante en cualquier momento del día. Sin conservantes ni aditivos, puro y saludable. ¡Prueba la frescura en cada sorbo!",
      img: "assets/img/jugo_saldan.jpg",
      capacidad: "1L",
      precio:1000,
      promo:'Solicitando este o más productos mediante nuestra web obtené un 10% de descuento',

    },
 
  ];

  constructor() { }

  getProducts():Product[]{
    return this.products;
  }
  
  getProduct(idx:any | string){
    // this.product.filter( p => p.nombre == idx)[0]
    return this.products[idx];
  }

  buscarProductos(termino:string | any):Product[]{
    let productArray:Product[]=[]
    termino = termino.toLowerCase()

    for (let i = 0; i < this.products.length; i++){
      let product = this.products[i];

      let nombre = product.nombre.toLowerCase();

      if(nombre.indexOf( termino ) >= 0){ //busca por el nombre
                                            /*se utiliza para encontrar la primera
                                              aparición de un valor específico dentro de una
                                              cadena de texto o un array. Su objetivo funcional es 
                                              devolver la posición (índice) en la cual 
                                              se encuentra el valor buscado. */
        product.idx = i;
        productArray.push(product);
      }
    }

    return productArray;

  }

}
