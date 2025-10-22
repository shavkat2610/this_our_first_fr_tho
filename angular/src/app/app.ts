import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from "./home/home";
import { SideBar } from "./components/side-bar/side-bar";

@Component({
  selector: 'app-root',
  imports: [Header, Home, SideBar],
  template: `
    <app-header [title]="this.title()" />

    <main>
      <div id="side-bar-div">
        <app-side-bar />
      </div>
      <div id="home-div">
        <app-home [user]="this.user()"/>
      </div>
    </main>
    

  `,
  styles: [`
    #side-bar-div {
      // display: inline-block;
      width: 200px;
      background-color: #f0f0f0;
      height: calc(100vh - 60px); /* Adjust height as needed */
    }
    main{
      display: flex;
      vertical-align: top;
      padding: 16px;
    }
    #home-div {
      // display: inline-block;
      flex-grow: 1;
      padding:16px;
    }
    `,
  ],
})
export class App {
  username = 'Shavkat';
  user = signal(this.username);
  title = signal('Shavkat App');
}
