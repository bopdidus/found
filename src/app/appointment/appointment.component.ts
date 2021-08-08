import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';

export interface Appointment {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent  {

  constructor(public dialogRef: MatDialogRef<AppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment, public translate: TranslateService) {
      translate.use(translate.currentLang)
     }

  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
