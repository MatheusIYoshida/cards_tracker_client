import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsForm } from '../cards-form/cards-form';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardsForm],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.scss',
})
export class CardsList {
  openingModal = false;
  closingModal = false;

  openModal(): void {
    this.openingModal = true;
  }

  closeModal(): void {
    if (!this.openingModal || this.closingModal) {
      return; 
    }

    this.closingModal = true;

    setTimeout(() => {
      this.closingModal = false;
      this.openingModal = false;
    }, 250); 
  }
}
