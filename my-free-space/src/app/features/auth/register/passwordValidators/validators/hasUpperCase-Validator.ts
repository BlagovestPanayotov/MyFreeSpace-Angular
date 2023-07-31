import { ValidatorFn } from '@angular/forms';

export function hasUpperCase(): ValidatorFn {
  return (control) => {
    return /[A-Z]+/.test(control?.value)
      ? null
      : { hasUpperCaseValidator: true };
  };
}
