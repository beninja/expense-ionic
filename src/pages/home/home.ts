import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensesService } from '../../services/expenses-api.service';
import { ModalController } from 'ionic-angular';
import { ExpenseformPage } from '../expenseform/expenseform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private expenses: any;
  private infiniteScrollCursor: number = 0;
  public showInfinitScroll: boolean = true;

  constructor(
    public navCtrl: NavController,
    private expensesSevice: ExpensesService,
    private modalCtrl: ModalController
  ) {

  }

  loadExpenses() {
    this.expensesSevice.getExpenses(null)
      .subscribe((expenses) => {
        if (expenses.length > 0) {
            this.infiniteScrollCursor = 1;
            this.showInfinitScroll = true;
        }
        this.expenses = expenses;
      })
  }

  loadMoreExpenses(skip, infiniteScroll) {
    this.expensesSevice.getExpenses(skip || 0)
      .subscribe((expenses) => {
        if (expenses.length > 0) {
            this.infiniteScrollCursor += 1;
        } else {
          this.showInfinitScroll = false;
        }
        this.expenses = this.expenses.concat(expenses);
        infiniteScroll.complete();
      })
  }

  doInfinite(infiniteScroll) {
    console.log(infiniteScroll);
    this.loadMoreExpenses(this.infiniteScrollCursor * 20, infiniteScroll);
  }

  ionViewWillEnter() {
    this.loadExpenses()
  }

  presentModal() {
    const modal = this.modalCtrl.create(ExpenseformPage);
    modal.onDidDismiss(data => {
     this.loadExpenses();
   });
    modal.present();
  }

}
