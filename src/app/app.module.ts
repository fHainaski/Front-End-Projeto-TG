import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { SobreDevComponent } from './sobre-dev/sobre-dev.component';
import { MaceteEscolarComponent } from './macete-escolar/macete-escolar.component';
import { CadastroMaceteComponent } from './cadastro-macete/cadastro-macete.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'sobre-dev', component: SobreDevComponent },
  { path: 'macete-escolar', component: MaceteEscolarComponent },
  { path: 'cadastro-macete', component: CadastroMaceteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    SobreDevComponent,
    MaceteEscolarComponent,
    CadastroMaceteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
        [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
