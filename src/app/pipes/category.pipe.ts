import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {


  transform(value: any[], propValue: string, key: string = ''): any[] {

    if (!Array.isArray(value) || !propValue || !key) {
      return value;
    }

    propValue = ('' + propValue).toLowerCase();
    return value.filter(item => {
      const stringItem: string = '' + item[key];
      return item[key] === propValue;
    });

  }
}




