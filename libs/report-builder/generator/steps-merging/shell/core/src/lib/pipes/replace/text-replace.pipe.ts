import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReplace'
})
export class TextReplacePipe implements PipeTransform {
  transform(value: string, type: 'normal' | 'underscore' | 'camel' = 'camel'): string {
    if (type === 'camel') {
      let arr = value.split(' ');
      let [first, ...res] = arr;
      res = res.map((rs) => {
        return rs.charAt(0).toUpperCase() + rs.slice(1)
      });
      return first.toLowerCase() + res.join('');
    }

    if (type === 'normal') {
      return value.split('').reduce((acc, curr, currentIndex, array) => {
        if (!acc.length) {
          return curr.toUpperCase();
        }
        if (/[A-Z]/.test(curr)) {
          const isLastItemUppercase = currentIndex === array.length - 1 && /[A-Z]/.test(array[currentIndex - 1]);
          const isNextItemUpperCase = /[A-Z]/.test(array[currentIndex + 1]);
          const isPreviousItemUppercase = /[A-Z]/.test(array[currentIndex - 1]);
          if (isLastItemUppercase || isNextItemUpperCase && isPreviousItemUppercase) {
            return acc + curr;
          }
          return `${ acc } ${ curr }`;
        }
        if (/[a-z\d]/.test(curr)) {
          return acc + curr;
        }
        return acc;
      }, '');
    }

    return value.toLowerCase().replace(new RegExp(' ', 'g'), '_');
  }
}
