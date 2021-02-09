import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(value: Array<any>, featured: boolean): Array<any> {
    return value.filter(item => item['featured'] === featured);
  }

}
