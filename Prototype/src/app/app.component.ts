import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;  
   constructor(   
     private platform: Platform
   ) {   
     this.sideMenu();  
   }  
   sideMenu() {  
     this.navigate =   
     [  
         { 
         title : 'Accueil',
         url   : '/home',
         icon  : 'home' 
         },
         { 
          title : 'Deconnexion',
          url   : '/login',
          icon  : 'close-circle' 
          },
     ];  
    }
}
