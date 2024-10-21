import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, EMPTY, map, Observable, tap, throwError } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class ProductServic{

    constructor(private http: HttpClient){

    }
    // getProducts(): Observable<IProduct[]>{
    //     return this.http.get<IProduct[]>("api/products.json")

    //                     .pipe(

    //                       map(products => products.map(
    //                         product => ({

    //                           ...product,
    //                           price: product.price * 1.5
                              
    //                         } as IProduct)
    //                         )),

    //                       tap(data => console.log(JSON.stringify(data))),
    //                       catchError(this.handleError)
    //                     );
    // }

    // (((declarative)))
    product$ = this.http.get<IProduct[]>("api/products.json")
    .pipe(
      map(products => products.map(
        product => ({

          ...product,
          price: product.price * 1.5
          
        } as IProduct)
        )),
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );


    
    private handleError(err: HttpErrorResponse){
      let errorMessage = "";

      if(err.error instanceof ErrorEvent){
        // Client or Network Error
        errorMessage= `Error: ${err.error.message}`;
      }

      else{
        // Server Error
        errorMessage= `Server Error: ${err.message}`
      }

      console.error(errorMessage);

      return throwError(() => errorMessage);

      //OR
      // return EMPTY
    }
}