import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './Iproduct';

@Pipe({
  name: 'filterProductPipe'
})
export class FilterProductPipePipe implements PipeTransform {

  transform(value: IProduct[], args: number): any 
  {
   
    if(!args)
    {
      return value;
    }
    
    return value.filter(i => i.Price > args);  
  }
}
