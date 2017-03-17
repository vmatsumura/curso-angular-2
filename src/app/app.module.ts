import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PrimeiroModuloModule} from './primeiro-modulo/primeiro-modulo.module'

import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrimeiroModuloModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
