import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import {forkJoin} from "rxjs/observable/forkJoin";

@Injectable()
export class ExpensesService {

  private apiBaseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiBaseUrl = 'http://127.0.0.1:8080/';
    // this.apiBaseUrl = 'https://foodnovate-api.herokuapp.com/';
  }

  getExpenses() {
    const uri = this.apiBaseUrl + 'expenses';
    return this.http.get(uri)
      .map((response) => {
        console.log('response', response);
        return response;
      });
  }

  getExpense(id) {
    const uri = this.apiBaseUrl + `expenses/${id}`;
    return this.http.get(uri)
      .map((response) => {
        return response;
      });
  }
}
