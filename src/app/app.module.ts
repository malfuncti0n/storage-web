import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './Controllers/app.component';
import { NavbarComponent } from './Controllers/navbar.component';
import { ScriptsComponent } from './Controllers/scripts.component';
import { LoginComponent } from './Controllers/login.component';
import { RegisterComponent } from './Controllers/register.component';
import { PageNotFoundComponent } from './Controllers/pageNotFound.component';
import { UserService }  from './Services/user.service';

const appRoutes: Routes = [
    { path: 'login',
        component: LoginComponent
    },
    { path: 'register',
        component: RegisterComponent
    },
    { path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScriptsComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
bootstrap: [AppComponent,NavbarComponent,ScriptsComponent]
})
export class AppModule { }
