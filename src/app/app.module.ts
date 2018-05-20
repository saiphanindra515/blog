import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { BlogeditComponent } from './blogedit/blogedit.component';
import { BlogcreateComponent } from './blogcreate/blogcreate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogviewComponent,
    BlogeditComponent,
    BlogcreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
