import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { hasLowerCase } from './validators/hasLowerCase-Validator';

@Directive({
  selector: '[appHasLowerCase]',
})
export class HasLowerCaseDirective implements Validator, OnChanges {
  @Input() passwordInput: string = '';

  validator: ValidatorFn = () => null;

  constructor(private el: ElementRef) {
    
  }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);    
    return this.validator(control);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const currentPasswordChanges = changes['passwordInput'];
    if (currentPasswordChanges) {
      this.validator = hasLowerCase();
    }
  }
}
