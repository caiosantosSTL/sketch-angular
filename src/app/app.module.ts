import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovoCompComponent } from './novo-comp/novo-comp.component'; //import componente criado

@NgModule({
  declarations: [
    AppComponent,
    NovoCompComponent //metido aqui automatic
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
