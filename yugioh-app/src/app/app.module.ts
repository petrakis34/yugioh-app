import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CardDetailsComponent } from './components/index/card-details/card-details.component';

@NgModule({
  declarations: [
    IndexComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
