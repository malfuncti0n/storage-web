import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './typescripts/app.component';
import { NavbarComponent } from './typescripts/navbar.component';
import { ScriptsComponent } from './typescripts/scripts.component';
import { LoginComponent } from './typescripts/login.component';
import { PageNotFoundComponent } from './typescripts/pageNotFound.component';

const appRoutes: Routes = [
    { path: 'login',
        component: LoginComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScriptsComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
bootstrap: [AppComponent,NavbarComponent,ScriptsComponent]
})
export class AppModule { }
