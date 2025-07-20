import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  standalone:false
})
export class RecetasPage implements OnInit {

   productos = [
    {
      nombre: 'Conjunto femenino de moda casual varios articulos',
      precio: 'articulos desde $30.000',
      imagen: '/assets/img/recetas/moda1.jpg',
    }, 
    {
      nombre: 'Conjunto camisa y pantalon lino hombre',
      precio: 'articulos desde $35.000',
      imagen: '/assets/img/recetas/moda2.jpg',
    },
    {
      nombre: 'Conjunto femenino de moda casual varios articulos',
      precio: 'articulos desde $25.000',
      imagen: '/assets/img/recetas/moda3.jpg',
    },
    {
      nombre: 'Conjunto camisa, pantalon y zapatillas moda hombre',
      precio: 'articulos desde $38.000',
      imagen: '/assets/img/recetas/moda4.jpg',
    },
    {
      nombre: 'Conjunto formal hombre varios articulos',
      precio: 'articulos desde $45.000',
      imagen: '/assets/img/recetas/moda5.jpg',
    },
    {
      nombre: 'Conjunto femenino casual varios articulos',
      precio: 'articulos desde $20.000',
      imagen: '/assets/img/recetas/moda6.jpg',
    }
      
    
  ];


  constructor() { }

  ngOnInit() {
  }

}
