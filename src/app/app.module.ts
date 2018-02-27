import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuListComponent } from './menu-bar/menu-list/menu-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'breakfast', component: MenuListComponent},
  { path: 'lunch', component: MenuListComponent},

];
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
