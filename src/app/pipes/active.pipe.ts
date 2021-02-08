import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(value: Array<any>, active: boolean): Array<any> {
    return value.filter(item => item['active'] === active)
  }
}