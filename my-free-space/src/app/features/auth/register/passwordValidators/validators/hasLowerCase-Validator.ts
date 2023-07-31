import { ValidatorFn } from '@angular/forms';

export function hasLowerCase(): ValidatorFn {
  return (control) => {
    return /[a-z]+/.test(control?.value)
      ? null
      : { hasLowerCaseValidator: true };
  };
}
