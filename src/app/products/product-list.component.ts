import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { IProduct } from "./product";
import { ConvertToSpacePipe } from "../shared/convert-to-space.pipe";
import { StarComponent } from "../shared/star/star.component";
import { ProductServic } from "./product.servic";
import { combineLatest, combineLatestWith, map, Subscribable, Subscription } from "rxjs";
import { ProductCategoryServic } from "./product-category.servic";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-products",
    standalone: true,
    templateUrl: "./product-list.component.html",
    imports: [FormsModule, CommonModule, ConvertToSpacePipe, StarComponent, RouterModule],
    styleUrl: "./product-list.component.css",
    // providers: [ProductServic]
})
export class ProductListComponent implements OnInit, OnDestroy{
    
  products: IProduct[] = [];
  filteredProducts : IProduct[] = [];
  imageWidth : number = 120;
  imageHeight : number = 120;
  showImage : boolean = false;
  productsSubscription!: Subscription;
  private _productListFilter : string = "";
 
  
  public get productListFilter() : string {
    return this._productListFilter
  }

  public set productListFilter(value : string) {
    this._productListFilter = value;

    this.products$.subscribe(products => {
      this.filteredProducts = products.filter(p => 
        p.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    });
  }

  constructor(
    private productServic: ProductServic,
    private categoryService: ProductCategoryServic
  )
  {
    console.log("Hi my name is constructor")
  }
  
  products$ = this.productServic.product$;

  productWithCategories$ = this.categoryService.productCategories$.pipe(
    combineLatestWith(this.products$),
    map(([categories, products]) => 
        products.map(product => (
          {
            ...product,
            category: categories.find(c => product.categoryId == c.id)?.name
          } as IProduct
        )))

  );

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }


  ngOnInit(): void {
    // this.productServic.getProducts().subscribe(products => {
    //   this.products = products;
    //   this.filteredProducts = this.products;
    // });
  }

  onStarClicked(number : number) : void{
    console.log(number);
  }

  toggelImage() : void{
    this.showImage = !this.showImage;
  }     
}