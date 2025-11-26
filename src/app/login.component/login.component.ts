import { Component } from '@angular/core';
import {LoginDto} from '../models/login.dto';

@Component({
  selector: 'app-login.component',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginData: LoginDto = {felhasznalonev: '', jelszo:''};
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(){
    this.authService.login(this.loginData).subscribe({
      next: () => this.router.navigate(['bindings-directives']),
      error: (err) => this.errorMsg = 'Hibás bejelentkezés'
      }

    );
  }


}
