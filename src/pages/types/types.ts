import { Component } from '@angular/core';
import { ExpensesService } from '../../services/expenses-api.service';

/**
 * Generated class for the TypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {

  public types: any;

  constructor(public expensesSevice: ExpensesService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TypesPage');
    this.expensesSevice.getTypes()
      .subscribe((types) => {
        this.types = types;
      })
  }

}
