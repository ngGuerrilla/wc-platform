import { Component } from '@angular/core';

@Component({
    selector: 'wc-platform-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Angular sandbox';
    selectModel = [];
    selectOptions = [{ id: 1, label: 'Item 1' }, { id: 2, label: 'Item 2' }, { id: 3, label: 'Item 3' }, { id: 4, label: 'Item 4' }];

    buttonAction = () => {
        alert('Button Clicked');
    }
}
