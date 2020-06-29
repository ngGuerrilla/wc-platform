import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule, ButtonComponent, SelectModule, SelectComponent } from '@wc-platform/components';
import { createCustomElement } from '@angular/elements';

@NgModule({
    imports: [BrowserModule, ButtonModule, SelectModule],
    entryComponents: [ButtonComponent, SelectComponent],
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        const elements: any[] = [
            [ButtonComponent, 'wc-button'],
            [SelectComponent, 'wc-select']
        ];

        for (const [component, name] of elements) {
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
}