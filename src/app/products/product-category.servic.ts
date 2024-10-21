import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, EMPTY, map, Observable, tap, throwError } from "rxjs";
import { IProductCategory } from "./product-category";


@Injectable({
    providedIn: "root"
})
export class ProductCategoryServic{

    constructor(private http: HttpClient){

    }

    productCategories$ = this.http.get<IProductCategory[]>("api/categories.json")
    .pipe(
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