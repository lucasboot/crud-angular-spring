import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'front-end': return 'html';
      case 'back-end': return 'vpn_key';
      case 'mobile': return 'phone_iphone'
      default: return 'device_unknown';
    }
  }
}
