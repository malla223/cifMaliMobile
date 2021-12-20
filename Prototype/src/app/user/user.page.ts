import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public toastCtrl: ToastController,
  private alertC: AlertController,
    private load: LoadingController) { }

  ngOnInit() {
  }
  
  async calcul(value) {
    const load = await this.load.create({
      message: "Calcul en cours..."
    });
    load.present();
  }

  async alertV(){
    await this.alertC.create({
      header:"Alert",
      message: "Demande Envoyer",
      buttons:[
      {
        text:"Retour"
      }
      ]
    }).then(res => res.present());
  }
}


