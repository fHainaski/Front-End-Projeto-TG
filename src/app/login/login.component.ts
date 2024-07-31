import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  livros = '/assets/pilha-de-livros.png';
  usuario = '/assets/usuario.png';
  cadeado = '/assets/cadeado.png';
}
