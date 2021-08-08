import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CheckPassword (controlName: string, matchingControlName: string){
(formGroup: AbstractControl) =>{
        const control = formGroup.get[controlName];
        const matching = formGroup.get[matchingControlName];

        if(matching.errors && !matching.errors.mustMatch){
            return ;
        }
        if(control.value !== matching.value){
            matching.setErrors({ mustMatch: true });
        } else{
            matching.setErrors(null);
        }
    }
}
