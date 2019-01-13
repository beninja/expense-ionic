import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensesService } from '../../services/expenses-api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private expenses: any;

  constructor(
    public navCtrl: NavController,
    private expensesSevice: ExpensesService
  ) {

  }

  ionViewWillEnter() {
    this.expensesSevice.getExpenses()
      .subscribe((expenses) => {
        console.log('expenses', expenses);
        this.expenses = expenses;
      })
  }

}
