
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPaymentsRoutingModule } from './CardPayments.module-route';
import { CardPaymentsComponent } from './CardPayments.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../common/mat-components';
import { ToolbarModule } from '../../../common/components/toolbar/toolbar.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReceiveCardService } from '../../../services/CardsTransactions/ReceiveCard.service';
@NgModule({
  declarations: [
    CardPaymentComponent,
    CardPaymentsComponent
  ],
  imports: [
    CommonModule,
    CardPaymentsRoutingModule,

    ToolbarModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
    
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  providers: [
	ReceiveCardService,
  ]
})
export class CardPaymentsModule { }
