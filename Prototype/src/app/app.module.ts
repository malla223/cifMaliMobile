import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { IonicStorageModule } from '@ionic/storage';
import {File} from '@ionic-native/file';
import {DocumentViewer} from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    //IonicStorageModule.forRoot(),
  ],
  providers:
   [
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
