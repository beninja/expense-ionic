import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date',
  pure: false,
})

export class DatePipe implements PipeTransform {

  constructor() {}

  public transform(items, filters) {
    return moment(items).format('YYYY-MM-DD');
  }
}
