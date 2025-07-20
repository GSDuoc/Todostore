import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular'; 
import { ApiClientesService } from '../services/api-clientes.service';


export interface Producto {
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  
  email: string = '';
  password: string = '';
  bienvenidos: string='Bienvenid@';
  textoPuntos: string = 'Tienes 2500 puntos'; // Texto que se mostrará en la página
  productos: Producto[] = []; // Variable para almacenar los datos de los productos

constructor(private route: ActivatedRoute,private menu: MenuController, private apiService: ApiClientesService) {}

  ngOnInit() { 
    // Llama al método GET y suscríbete a los datos
     this.apiService.getUsers().subscribe(
      (data) => {
        this.productos = data; // Almacena los datos en una variable
      },
      (error) => {
       
       
      }
    );

     this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }

}
