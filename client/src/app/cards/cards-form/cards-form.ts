import { Component } from '@angular/core';
import { FormInput } from '../../shared/ui/form-input/form-input';
import { FormButton } from '../../shared/ui/form-button/form-button';

@Component({
  selector: 'app-cards-form',
  standalone: true,
  imports: [FormInput, FormButton],
  templateUrl: './cards-form.html',
  styleUrl: './cards-form.scss',
})
export class CardsForm {}

