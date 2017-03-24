import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './typescripts/app.component';
import { NavbarComponent } from './typescripts/navbar.component';
import { ScriptsComponent } from './typescripts/scripts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScriptsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,ScriptsComponent]
})
export class AppModule { }
