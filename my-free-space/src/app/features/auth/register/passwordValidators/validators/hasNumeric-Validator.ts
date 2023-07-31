import { ValidatorFn } from '@angular/forms';

export function hasNumeric(): ValidatorFn {
  return (control) => {
    return /[0-9]+/.test(control?.value) ? null : { hasNumericValidator: true };
  };
}
