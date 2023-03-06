import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';

    employees = [
            {'name':'Fazt',position : 'manager'},
            {'name':'Juan',position : 'Designer'},
            {'name':'Pedro',position : 'Programmer'}


    ];
    model:any = {};
    addEmployee():void{

    }
    deleterEmployee():void{

    }

    editEmployee():void{
    }

    updateEmployee():void{

    }

}
