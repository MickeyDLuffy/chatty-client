import { Component } from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cht';

  constructor( private loginService: AuthService) {
  }

  login() {
    this.loginService.login();
  }
}
