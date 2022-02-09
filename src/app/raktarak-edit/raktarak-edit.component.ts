import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RaktarakService } from '../raktarak.service';

@Component({
  selector: 'app-raktarak-edit',
  templateUrl: './raktarak-edit.component.html',
  styleUrls: ['./raktarak-edit.component.css']
})
export class RaktarakEditComponent{
  cim:any;
  id:any;
  hosszusag:any;
  szelesseg:any;
  datuma: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data:any,
    public raktarak: RaktarakService,
    public dialogRef: MatDialogRef<RaktarakEditComponent>)

    { 
    this.cim = this.data.datakey.cim;
    this.hosszusag = this.data.datakey.hosszusag;
    this.szelesseg = this.data.datakey.szelesseg;
    this.id = this.data.datakey.id;
    this.datuma = new Date()
  }
  bezaras() {
    this.dialogRef.close();
  }
}
