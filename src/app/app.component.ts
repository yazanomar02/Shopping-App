import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { combineLatestWith, delay, forkJoin, from, interval, map, Observable, of, subscribeOn, Subscriber, take, tap, timer } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, RouterModule, TranslateModule],
  templateUrl: './app.component.html', // OR --> template: "<app-products></app-products>"
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private translate: TranslateService){
    translate.addLangs(["en", "ar"]);
    translate.setDefaultLang("ar");
  }


  ChangeLang(lang: string) : void{
    this.translate.use(lang);
  }


  ngOnInit(): void {

    this.translate.onLangChange.subscribe(lang => console.log(lang))

    // var appels$ = new Observable(Subscriber => {
    //   Subscriber.next("First Apple");

    //   setTimeout(() => {
    //     Subscriber.next("Second Apple")
    //   }, 2000)

    //   Subscriber.next("Third Apple");

    //   // Subscriber.error("Broken Apple");
      
    //   Subscriber.complete();
    // });


    var appels$ = from(["First Apple", "Second Apple", "Third Apple"])

    // var appels$ = of(20, 15, 10, 5).pipe(
    //   tap(num => console.log(num)), // إلقاء نظرة قبل التعديل على البيانات
    //   map(num => num *2),
    //   map(num => num -10),
    //   take(3) // اخذ أول 3
    // );


    
    // var appels$ = of(20, 15, 10, 5, 40).pipe(
    //   tap(num => console.log(num)), // إلقاء نظرة قبل التعديل على البيانات
    //   map(num => num *2),
    //   map(num => num -10),
    //   map(num => {
    //     if(num === 0)
    //       throw new Error("Zero Detected");

    //     return num
    //   }),
    // );



// let numbers$ = range(1, 10).pipe(
//     map(number => number * 3),
//     filter(number => number % 2 == 0)
// );



// let firstTimer = timer(1000);
// let secondTimer = timer(5000, 1000);

// firstTimer.pipe(
//     combineLatestWith(secondTimer)
// ).subscribe(res => console.log(res));



// observables should be completable
// let final$ = forkJoin({
//   one: of('Hello'),
//   two: of('world').pipe(delay(1000)),
//   three: interval(1000).pipe(take(1)),
//   four: interval(1000).pipe(take(3))
// });


// final$.subscribe(res => console.log(res)); //  Output => {one: 'Hello', two: 'world', three: 0, four: 2}



    var sub = appels$.subscribe({
      next(apple){
        console.log("a new apple has been received", apple);
      },
      error(err){
        console.error("Something is worng", err);
      },
      complete(){
        console.log("we have done for today");
      }
    });

    // sub.unsubscribe();
  }

















  title = 'shopping-app';
}
