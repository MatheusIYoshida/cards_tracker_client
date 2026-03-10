import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormInput } from '../shared/ui/form-input/form-input';
import { FormButton } from '../shared/ui/form-button/form-button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    FormInput, 
    FormButton, 
    RouterLink,
    TranslateModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
