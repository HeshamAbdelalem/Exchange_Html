
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalTransferPricesRoutingModule } from './LocalTransferPrices.module-route';
import { LocalTransferPricesComponent } from './LocalTransferPrices.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../common/mat-components';
import { ToolbarModule } from '../../../common/components/toolbar/toolbar.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountService } from '../../../services/GeneralLedger/Account.service';
@NgModule({
  declarations: [
    
    LocalTransferPricesComponent
  ],
  imports: [
    CommonModule,
    LocalTransferPricesRoutingModule,

    ToolbarModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
    
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  providers: [
	AccountService,
  ]
})
export class LocalTransferPricesModule { }
