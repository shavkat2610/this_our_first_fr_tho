import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss'
})
export class Greeting {
  // give a safe default so computed runs without reading undefined
  @Input() user: string = '';

  // don't call this.user(); use property access
  message = computed(() => `Welcome, ${this.user}`);
}
