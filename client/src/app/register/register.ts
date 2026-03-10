import { Component } from '@angular/core';
import { FormInput } from '../shared/ui/form-input/form-input';
import { FormButton } from '../shared/ui/form-button/form-button';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  imports: [
    FormInput, 
    FormButton, 
    RouterLink,
    TranslateModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  signinText: string = 'Already have an account?';
  signinLinkText: string = 'Sign in';
}
