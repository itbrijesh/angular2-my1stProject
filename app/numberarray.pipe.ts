import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayOfNumber'})
export class NumberArray implements PipeTransform {

    transform( value: any, args: any[] ) {
        let result = [value];
        for( let i = 0; i < value; i++ ){
            result.push( i );
        }
        console.log( 'Array from number >>' + result );
    }

}