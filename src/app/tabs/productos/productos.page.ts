import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false
  
})
export class ProductosPage implements OnInit {

    productos = [
    {
      nombre: 'Poleron c/capuchon gris y negro',
      precio: "$40.000",
      imagen: '/assets/img/productos/poleron1.jpg'
    },
    {
      nombre: 'Minivestido manga larga blanco',
      precio: "$45.000",
      imagen: '/assets/img/productos/minivestido2.jpg'
    },
    {
      nombre: 'Minivestido manga larga negro',
      precio: "$45.000",
      imagen: '/assets/img/productos/minivestido1.jpg'
    },
    {
      nombre: 'Sobrecamisa c/capuchon cuadrille',
      precio: "$50.000",
      imagen: '/assets/img/productos/sobrecamisa1.jpg'
    },
    {
      nombre: 'iSmartwatch varios colores',
      precio: "$180.000",
      imagen: '/assets/img/productos/reloj1.jpg'
    },
    {
      nombre: 'Audifonos inalambricos ipods ',
      precio: "$120.000",
      imagen: '/assets/img/productos/audifonos1.jpg'
    },
    {
      nombre: 'Camara profesional Canon',
      precio: "$350.000",
      imagen: '/assets/img/productos/camara1.jpg'
    },
    {
      nombre: 'Pantalon cargo hombre ',
      precio: "$35.000",
      imagen: '/assets/img/productos/pantalon1.jpg'
    }
    
    // Agrega más frutas si es necesario
  ];

  constructor(private menu: MenuController) { }


  ngOnInit() {
        this.menu.close('mainMenu');
  }

}
