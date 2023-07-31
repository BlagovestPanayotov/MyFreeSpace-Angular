import { Directive, Input, SimpleChanges } from '@angular/core';
import { hasUpperCase } from './validators/hasUpperCase-Validator';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appHasUpperCase]'
})
export class HasUpperCaseDirective {
  @Input() password: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentPasswordChanges = changes["password"];
    if(currentPasswordChanges){
      this.validator = hasUpperCase();
    }
  }
}
