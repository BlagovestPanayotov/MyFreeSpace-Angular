import { Directive, Input, SimpleChanges } from '@angular/core';
import { hasSpecChar } from './validators/hasSpecChar-Validator';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appHasSpecCharCase]'
})
export class HasSpecCharDirective {
  @Input() passwordReInput: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentPasswordChanges = changes["passwordReInput"];
    if(currentPasswordChanges){
      this.validator = hasSpecChar();
    }
  }
}
