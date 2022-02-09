import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TargyakService } from '../targyak.service';


@Component({
  selector: 'app-torles-popup-component',
  templateUrl: './torles-popup-component.component.html',
  styleUrls: ['./torles-popup-component.component.css']
})
export class TorlesPopupComponentComponent {

  proba = this.targyak.tablazat

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data:any, 
    private targyak: TargyakService, 
    private dialogRef: MatDialogRef<TorlesPopupComponentComponent>
    ) { }

  cancel(){
    this.dialogRef.close()
  };
  
  torles(){
   let torles= this.proba.splice(this.data,1)
    this.targyak.ujHossz.next(-torles[0].hossz)
    return torles;
  }
}
