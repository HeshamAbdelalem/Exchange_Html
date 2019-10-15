
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChequeBuyCurreniesRoutingModule } from './ChequeBuyCurrenies.module-route';
import { ChequeBuyCurreniesComponent } from './ChequeBuyCurrenies.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../common/mat-components';
import { ToolbarModule } from '../../../common/components/toolbar/toolbar.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CurrencyService } from '../../../services/Masters/Currency.service';
@NgModule({
  declarations: [
    ChequeBuyCurrenyComponent,
    ChequeBuyCurreniesComponent
  ],
  imports: [
    CommonModule,
    ChequeBuyCurreniesRoutingModule,

    ToolbarModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
    
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  providers: [
	CurrencyService,
  ]
})
export class ChequeBuyCurreniesModule { }
