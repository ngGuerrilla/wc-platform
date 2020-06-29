import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wcp-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Input() class: string;
    @Input() action: Function = null;
    @Input() icon: string = null;
    @Input() disabled: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    executeAction() {
        if (this.action) {
            this.action();
        }
    }
}
