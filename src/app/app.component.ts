import { Component, OnInit } from '@angular/core';
import { provideRouter } from '@angular/router';
import { from,interval,Observable,of } from 'rxjs';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DataService } from './data.service';
import {map,filter} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'Observables';
  constructor(private dataSErvice : DataService){

  }
  // myObservable=new Observable((observer)=>{
  //  console.log('Observable starts')
  //  setTimeout(()=>{observer.next("1")},1000)
  //  setTimeout(()=>{observer.next("2")},2000)
  //  setTimeout(()=>{observer.next("3")},3000)
  //  setTimeout(()=>{observer.error(new Error('Something went wrong! Please try again later'))},3000)
  //  setTimeout(()=>{observer.next("5")},5000)
  //  setTimeout(()=>{observer.complete()},3000)
  // })


//   myObservable=Observable.create((observer: {
//     error(arg0: Error): unknown; next: (arg0: string) => void; 
// })=>{
//    console.log('Observable starts')
//    setTimeout(()=>{observer.next("A")},1000)
//    setTimeout(()=>{observer.next("B")},2000)
//    setTimeout(()=>{observer.next("C")},3000)
//    setTimeout(()=>{observer.next("D")},4000)
//    setTimeout(()=>{observer.error(new Error('Something went wrong'))},4000)
//    setTimeout(()=>{observer.next("E")},5000)
//   })

  
//   array1=[1,2,6,7,8];
//   array2=['A','B','C','D']
   
//   // myObservable=of(this.array1,this.array2,20,79,'Hello')
//    myObservable=from(this.array1).pipe(map((val)=>{
//     return val*5;
//  }),filter((val)=>{
//   return val>=30
//  }))


  //  transformedObs=this.myObservable.pipe(map((val)=>{
  //     return val*5;
  //  }),filter((val)=>{
  //   return val>=30
  //  }))

  //  filteredObs=this.transformedObs.pipe(filter((val)=>{
  //    return val>=30
  //  }))


   counterObservable=interval(1000)
   counterSub:any;

  ngOnInit(){
    // this.myObservable.subscribe((val: any)=>{
    //       console.log(val)   
    //    }, (error: { message: any; })=>{   
    //      alert(error.message)
    // },()=>{
    //   alert('Observable has completed emitting all values')
    // });

  }
  unsubscribe(){
    this.counterSub.unsubscribe()
  }
  subscribe(){
    this.counterSub=this.counterObservable.subscribe((val)=>{

      console.log(val);
     })
  }
  // ngOnInit(): void {
    
  // }
}
