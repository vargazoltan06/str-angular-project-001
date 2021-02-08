import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicer'
})
export class SlicerPipe implements PipeTransform {

  transform(value: Array<any>, n: number): Array<any> {
    return value.slice(0, n);
  }

}
