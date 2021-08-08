import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AppointmentComponent} from '../appointment/appointment.component'
import {TranslateService} from '@ngx-translate/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

   obj:Item;

  constructor(public dialog: MatDialog, public translate: TranslateService,  private route: ActivatedRoute, private service: ItemService) { 
    translate.use(translate.currentLang);
  }

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get('id');
     this.service.getItem(itemId).subscribe((res)=>{
        this.obj = res;
     });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '500px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
  
    });
  }

}
