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
    this.apiBaseUrl = 'http://192.168.0.107:8080/';
    // this.apiBaseUrl = 'https://foodnovate-api.herokuapp.com/';
  }

  getExpenses(offset) {
    const uri = this.apiBaseUrl + `expenses?limit=20&offset=${offset}`;
    return this.http.get(uri)
      .map((response) => {
        return response;
      });
  }

  postExpense(expense) {
    const uri = this.apiBaseUrl + 'expenses';
    return this.http.post(uri, expense)
      .map((response) => {
        return response;
      });
  }

  getTypes() {
    const uri = this.apiBaseUrl + 'types';
    return this.http.get(uri)
      .map((response) => {
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
