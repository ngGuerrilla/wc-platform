import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';

import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'wcp-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {
    @ViewChild(NgSelectComponent, { static: true }) public select: NgSelectComponent;

    // tslint:disable-next-line:no-input-rename
    @Input('value') _value;
    @Input() model: any;
    @Output() modelChange = new EventEmitter<any>();
    @Output() focus = new EventEmitter<any>();
    @Input() options: any[] = [];
    @Input() multiple: boolean = false;
    @Input() bindLabel: string = 'label';
    @Input() bindValue: string;
    @Input() placeholder: string;
    @Input() disabled: boolean;

    selectedItems = [];

    constructor() {}

    selectAll() {
        this.selectedItems = this.options.map(x => x.name);
    }

    unselectAll() {
        this.selectedItems = [];
    }
}



