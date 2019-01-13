import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ExpensesService } from '../../services/expenses-api.service';

/**
 * Generated class for the ExpenseformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expenseform',
  templateUrl: 'expenseform.html',
})
export class ExpenseformPage {

  public newTransaction: any;
  public types: any;

  constructor(
    public viewCtrl: ViewController,
    public expensesService: ExpensesService) {
    this.newTransaction = {}
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewWillEnter() {
    this.expensesService.getTypes()
      .subscribe((types) => {
        this.types = types;
      })
  }

  sendNewTransaction() {
    this.expensesService.postExpense(this.newTransaction)
      .subscribe((result) => {
        console.log(result);
        this.dismiss();
      });
  }

}
