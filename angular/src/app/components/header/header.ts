import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  // give a safe default so computed runs without reading undefined
  @Input() title: string = '';

  // // don't call this.user(); use property access
  // title1 = computed(() => `Welcome, ${this.title}`);
}
