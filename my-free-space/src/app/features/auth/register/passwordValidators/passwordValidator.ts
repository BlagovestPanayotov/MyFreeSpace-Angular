import { ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control) => {
    const hasLowerCase = /[a-z]+/.test(control?.value) && control?.value !== '';

    const hasUpperCase = /[A-Z]+/.test(control?.value) && control?.value !== '';

    const hasNumeric = /[0-9]+/.test(control?.value) && control?.value !== '';

    const hasLSpecChar =
      /[*+=_!$%&]+/.test(control?.value) && control?.value !== '';

    const isValid = hasLowerCase && hasUpperCase && hasNumeric && hasLSpecChar;

    return isValid && control?.value !== ''
      ? null
      : {
          hasLowerCaseValidator: hasLowerCase,
          hasUpperCaseValidator: hasUpperCase,
          hasNumericValidator: hasNumeric,
          hasLSpecCharValidator: hasLSpecChar,
        };
  };
}
