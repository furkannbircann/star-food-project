import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSidenavOpen: boolean = true;
  setSidenavOpen(event: any) {
    this.isSidenavOpen = event;
  }
  
}
