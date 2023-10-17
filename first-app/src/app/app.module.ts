import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataEventBindingComponent } from './data-event-binding/data-event-binding.component';
import { DirettiveStrutturaliComponent } from './direttive-strutturali/direttive-strutturali.component';
import { ParentComponent } from './parent-child-communication/parent/parent.component';
import { InChildComponent } from './parent-child-communication/in-child/in-child.component';
import { OutChildComponent } from './parent-child-communication/out-child/out-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEventBindingComponent,
    DirettiveStrutturaliComponent,
    ParentComponent,
    InChildComponent,
    OutChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
