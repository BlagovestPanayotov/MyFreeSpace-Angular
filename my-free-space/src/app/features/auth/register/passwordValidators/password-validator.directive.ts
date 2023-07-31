import { Directive, Input, SimpleChanges } from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
} from '@angular/forms';
import { passwordValidator } from './passwordValidator';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective {
  @Input() appPasswordValidator: any;

  validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentPasswordChanges = changes['appPasswordValidator'];
    if (currentPasswordChanges) {
      this.validator = passwordValidator();
    }
  }
}
