import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuListComponent } from './menu-bar/menu-list/menu-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
