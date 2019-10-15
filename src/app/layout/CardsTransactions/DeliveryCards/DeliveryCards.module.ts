
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryCardsRoutingModule } from './DeliveryCards.module-route';
import { DeliveryCardsComponent } from './DeliveryCards.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../common/mat-components';
import { ToolbarModule } from '../../../common/components/toolbar/toolbar.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { GuarantorService } from '../../../services/Masters/Guarantor.service';
@NgModule({
  declarations: [
    DeliveryCardComponent,
    DeliveryCardsComponent
  ],
  imports: [
    CommonModule,
    DeliveryCardsRoutingModule,

    ToolbarModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
    
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  providers: [
	GuarantorService,
  ]
})
export class DeliveryCardsModule { }
