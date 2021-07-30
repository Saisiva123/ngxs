import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseEmp'
})
export class UppercaseEmpPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toUpperCase();
  }

}