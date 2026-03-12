import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInput } from '../../shared/ui/form-input/form-input';
import { FormButton } from '../../shared/ui/form-button/form-button';
import { Textarea } from '../../shared/ui/textarea/textarea';

@Component({
  selector: 'app-cards-form',
  standalone: true,
  imports: [CommonModule, FormInput, FormButton, Textarea],
  templateUrl: './cards-form.html',
  styleUrl: './cards-form.scss',
})
export class CardsForm {
  openingModal = false;
  closingModal = false;

  openModal(): void {
    this.openingModal = true;
  }

  closeModal(): void {
    if (!this.openingModal || this.closingModal) return;
    this.closingModal = true;
    setTimeout(() => {
      this.closingModal = false;
      this.openingModal = false;
    }, 250);
  }
}