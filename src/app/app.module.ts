
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuListComponent } from './menu-bar/menu-list/menu-list.component';
import { BreakfastComponent } from './menu-bar/breakfast/breakfast.component';
import { DinnerComponent } from './menu-bar/dinner/dinner.component';
import { LunchComponent } from './menu-bar/lunch/lunch.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'breakfast', component: BreakfastComponent}, // localhost:4200/breakfast
  { path: 'lunch', component: LunchComponent},
  { path: 'dinner', component: DinnerComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    MenuListComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // resigster route to app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
