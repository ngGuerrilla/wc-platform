import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ButtonModule } from '../button/button.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ButtonModule, FormsModule, NgSelectModule],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule {}
