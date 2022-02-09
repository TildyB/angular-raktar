import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TargyakService } from '../targyak.service';

@Component({
  selector: 'app-szerkesztes-popup',
  templateUrl: './szerkesztes-popup.component.html',
  styleUrls: ['./szerkesztes-popup.component.css']
})
export class SzerkesztesPopupComponent{

  nev:any;
  hossz:any;
  datuma:any;
  d = new Date();

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data:any,
    public targyak: TargyakService,
    public dialogRef: MatDialogRef<SzerkesztesPopupComponent>) 
    { 
    this.nev = this.data.datakey.nev;
    this.hossz = this.data.datakey.hossz;
    this.datuma = this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate();
  }
 
  bezaras() {
    this.dialogRef.close();
  }
}
