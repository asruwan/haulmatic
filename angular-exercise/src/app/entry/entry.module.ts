import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    EntryRoutingModule
  ],
  exports:[MenuComponent]
})
export class EntryModule { }
