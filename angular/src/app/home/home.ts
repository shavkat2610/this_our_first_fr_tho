import { Component, computed, Input, input, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  // give a safe default so computed runs without reading undefined
  @Input() user: string = '';

  // don't call this.user(); use property access
  // user1 = computed(() => `${this.user}`);
}
