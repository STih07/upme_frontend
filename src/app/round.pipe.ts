import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'round',
})

export class RoundPipe implements PipeTransform {
  transform(num: number) {
      return Math.round(num);
  }
}
