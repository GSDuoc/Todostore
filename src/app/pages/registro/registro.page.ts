import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';  
import { FormtearFechaPipe } from '../../pipes/formtear-fecha.pipe';
import { DataservicesService } from '../../services/dataservices.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  nombre: any='';
  apellido: any=''; 
  selectedDate: any='';
  email: any='';
  password: any='';
  nivelEducacion: any='';  
  registroStatus: string='';

 constructor(private alertController: AlertController, 
             private menu: MenuController,
             private formtearFechaPipe: FormtearFechaPipe,
             private dataServices: DataservicesService ) { }

  ngOnInit() {
     this.menu.close("mainMenu");
  }

    async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

   guardar() { 

    const fechaFormateada = this.formtearFechaPipe.transform(this.selectedDate);

    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      //this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+fechaFormateada);  //
      this.registrar();
    }
  }

  async registrar() {
    const success = await this.dataServices.registerUser(
      this.nombre,
      this.apellido,
      this.email,
      this.password,
      this.nivelEducacion,
      this.selectedDate
    );
    this.registroStatus = success ? 'Registro exitoso' : 'Error al registrar';
    this.presentAlert(this.registroStatus);

  }
 
}
