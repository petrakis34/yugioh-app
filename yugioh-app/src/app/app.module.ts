import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    IndexComponent
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
