import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomiser'
})
export class RandomiserPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    return value.sort(() => Math.random() - 0.5);
  }

}
