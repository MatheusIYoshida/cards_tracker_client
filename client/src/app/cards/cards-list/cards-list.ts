import { Component } from '@angular/core';
import { CardsForm } from '../cards-form/cards-form';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardsForm],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.scss',
})
export class CardsList {
  isCreateModalOpen = false;

  openCreateModal(): void {
    this.isCreateModalOpen = true;
  }

  closeCreateModal(): void {
    this.isCreateModalOpen = false;
  }
}
