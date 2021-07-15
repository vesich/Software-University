import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlistItemComponent } from './userlist-item/userlist-item.component';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserlistItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
