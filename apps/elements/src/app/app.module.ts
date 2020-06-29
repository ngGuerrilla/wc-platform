import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule, ButtonComponent } from '@wc-platform/components';
import { createCustomElement } from '@angular/elements';

@NgModule({
    imports: [BrowserModule, ButtonModule],
    entryComponents: [ButtonComponent],
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        const elements: any[] = [
            [ButtonComponent, 'wc-button']
        ];

        for (const [component, name] of elements) {
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
}