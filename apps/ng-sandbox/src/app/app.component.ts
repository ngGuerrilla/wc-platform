import { Component } from '@angular/core';

@Component({
  selector: 'wc-platform-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular sandbox';

  buttonAction = () => {
    alert('Button Clicked');
  }
}
