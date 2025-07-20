import { Component, OnInit } from '@angular/core';
import { ApiClientesService } from '../../services/api-clientes.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
   standalone: false,
})
export class ClientesPage implements OnInit {

 productos: any[] = []; // Variable para almacenar los datos de los productos

constructor( private apiService: ApiClientesService, 
             private menu: MenuController, 
             private alertController: AlertController) { }

  ngOnInit() {
     this.menu.close("mainMenu");

     // Llama al método GET y suscríbete a los datos
     this.apiService.getUsers().subscribe(
      (data) => {
        this.productos = data; // Almacena los datos en una variable
      },
      (error) => {
        this.mostrarAlerta(error);
        //console.error('Error al obtener los usuarios:', error);
      }
    );

  }

  
 

  // Método para mostrar alerta sobre el stock del producto
  async mostrarAlerta(mensaje:any) {
    const alert = await this.alertController.create({
      header: 'Mi app',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  

}
