import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LetrehozasPopupComponent } from '../targyak-create/letrehozas-popup.component';
import { TargyakService } from '../targyak.service';
import { TorlesPopupComponentComponent } from '../targyak-delete/torles-popup-component.component';
import { MatPaginator } from '@angular/material/paginator';
import { SzerkesztesPopupComponent } from '../targyak-edit/szerkesztes-popup.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PostsService } from '../posts.service';
import {  Subscription } from 'rxjs';
@Component({
  selector: 'app-targyak',
  templateUrl: './targyak.component.html',
  styleUrls: ['./targyak.component.css']
})
export class TargyakComponent implements OnInit {

title = 'material';

admin = this.posts.isAdmin;

hossz : Subscription;

@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

constructor(
  private dialogus: MatDialog, 
  private targyak:TargyakService,
  private _snackBar: MatSnackBar,
  private posts:PostsService
  ){


  }



displayedColumns: string[] = ['neve', 'hossza', 'datuma', 'actions'];

dataSource = new MatTableDataSource(this.targyak.tablazat);

ngOnInit() {
   this.dataSource.filterPredicate = function(data, filter: string): boolean {  
    return data.nev.toLowerCase().includes(filter)  
  };

  // Tárgyak össz hosszának ellenőrzése
  this.hossz = this.targyak.ujHossz.subscribe(adat =>{
    this.targyak.osszesHossz = this.targyak.osszesHossz+adat;
     console.log(this.targyak.osszesHossz)
  })

}
ngOnDestroy() {
  this.hossz.unsubscribe();
}

// Filter funkció
filtering(FilterErtek:String){
  this.dataSource.filter = FilterErtek.trim().toLocaleLowerCase();
  console.log(this.dataSource)
}

//Törlés funkció
torles(x:any){
    let dialog = this.dialogus.open(TorlesPopupComponentComponent,{data:x})
    dialog.afterClosed().subscribe(result => {
    this.dataSource.data = this.targyak.tablazat})
}

//Szerkesztés funkció
szerkesztes(y:any,z:any){
  let dialog = this.dialogus.open(SzerkesztesPopupComponent, {data:{datakey: y,datakey2:z}})
  dialog.afterClosed().subscribe(result => {
      if(result){
        console.log(result)
        console.log(this.dataSource.data)
        this.dataSource.data[z] =result;
        this.dataSource._updateChangeSubscription();
      }
  })
}

//Létrehozás funkció
letrehozas(){
  let dialog =this.dialogus.open(LetrehozasPopupComponent);
  dialog.afterClosed().subscribe(result => {
    if(result){        
    this.dataSource.data = this.targyak.tablazat
    this._snackBar.open('Sikeres Mentés','Mégse',{duration: 2000})
    }
  })
}

openSnackBar(message: string) {
  this._snackBar.open(message);
}
}