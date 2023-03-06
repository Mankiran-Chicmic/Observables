import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit
{
  constructor(private dataservice:DataService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  enteredText:string='';
  OnButtonClick(){
    console.log(this.enteredText)
    this.dataservice.raiseDataEmitterEvent(this.enteredText)
  }
}
