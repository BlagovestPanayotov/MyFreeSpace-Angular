import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  Validator,
} from '@angular/forms';
import { hasNumeric } from './validators/hasNumeric-Validator';

@Directive({
  selector: '[appHasNumericCase]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: HasNumericDirective,
      multi: true,
    },
  ],
})
export class HasNumericDirective implements Validator, OnChanges {
  @Input() password: string[] = [];

  validator: ValidatorFn = () => null;

  constructor(el: ElementRef) {
    console.log(el);

    
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);
    
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['passwordReInput']);
    
    const currentPasswordChanges = changes['passwordReInput'];
    if (currentPasswordChanges) {
      this.validator = hasNumeric();
    }
  }
}
