import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notification-bell',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './notification-bell.component.html',
  styleUrl: './notification-bell.component.css'
})
export class NotificationBellComponent {
  unreadCount = signal<number>(3);

  onBellClick() {
  console.log('Notifiche lette!');
  this.unreadCount.set(0);
}
}
