import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'home'
})
export class HomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      return value.filter(
        item => item.login.toLowerCase().indexOf(args.toLowerCase()) > -1
      );
    } else {
      return value
    }
  }
}
