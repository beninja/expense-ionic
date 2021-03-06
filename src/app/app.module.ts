import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TypesPage } from '../pages/types/types';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ExpenseformPage } from '../pages/expenseform/expenseform';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { ExpensesService } from '../services/expenses-api.service';

import { DatePipe } from "../pipes/date.pipe";

@NgModule({
  declarations: [
    MyApp,
    TypesPage,
    ContactPage,
    HomePage,
    TabsPage,
    ExpenseformPage,
    DatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TypesPage,
    ContactPage,
    HomePage,
    TabsPage,
    ExpenseformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExpensesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
