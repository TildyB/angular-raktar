import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RaktarakService } from '../raktarak.service';


@Component({
  selector: 'app-raktarak-delete',
  templateUrl: './raktarak-delete.component.html',
  styleUrls: ['./raktarak-delete.component.css']
})
export class RaktarakDeleteComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data:any, 
    private raktarak: RaktarakService, 
    private dialogRef: MatDialogRef<RaktarakDeleteComponent>
    ) { }

  adat = this.raktarak.raktarakTablazat;

  cancel(){
    this.dialogRef.close()
  };
  
// Törlés funkció
  torles(){
    let torles =this.adat.splice(this.data,1)
    this.raktarak.ujRaktarHossz.next(-torles[0].hosszusag)
    return torles;
  }
}
