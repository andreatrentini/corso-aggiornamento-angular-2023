import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataEventBindingComponent } from './data-event-binding/data-event-binding.component';
import { DirettiveStrutturaliComponent } from './direttive-strutturali/direttive-strutturali.component';
import { ParentComponent } from './parent-child-communication/parent/parent.component';
import { InChildComponent } from './parent-child-communication/in-child/in-child.component';
import { OutChildComponent } from './parent-child-communication/out-child/out-child.component';
import { DepInjContainerComponent } from './dep-inj/dep-inj-container/dep-inj-container.component';
import { DepInjFormComponent } from './dep-inj/dep-inj-form/dep-inj-form.component';
import { DepInjTableComponent } from './dep-inj/dep-inj-table/dep-inj-table.component';
import { ObserverComponent } from './observable/observer/observer.component';
import { ObserverContainerComponent } from './observable/observer-container/observer-container.component';
import { LogEmitterComponent } from './subject/log-emitter/log-emitter.component';
import { LogReceiverAComponent } from './subject/log-receiver-a/log-receiver-a.component';
import { LogReceiverBComponent } from './subject/log-receiver-b/log-receiver-b.component';
import { LogContainerComponent } from './subject/log-container/log-container.component';
import { TabellaUtentiComponent } from './httpclient/tabella-utenti/tabella-utenti.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: DataEventBindingComponent},
  {path:'direttive', component: DirettiveStrutturaliComponent},
  {path:'parent', component: ParentComponent},
  {path:'dep-inj', component: DepInjContainerComponent},
  {path:'observer', component: ObserverContainerComponent},
  {path:'subject', component: LogContainerComponent},
  {path:'httpclient', component: TabellaUtentiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataEventBindingComponent,
    DirettiveStrutturaliComponent,
    ParentComponent,
    InChildComponent,
    OutChildComponent,
    DepInjContainerComponent,
    DepInjFormComponent,
    DepInjTableComponent,
    ObserverComponent,
    ObserverContainerComponent,
    LogEmitterComponent,
    LogReceiverAComponent,
    LogReceiverBComponent,
    LogContainerComponent,
    TabellaUtentiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
