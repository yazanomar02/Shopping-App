import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-detial',
  standalone: true,
  imports: [],
  templateUrl: './product-detial.component.html',
  styleUrl: './product-detial.component.css'
})
export class ProductDetialComponent {
  
  constructor(private route: ActivatedRoute, private router: Router){
    let x = this.route.snapshot.paramMap.get("id"); // للاطلاع على معلومات الموجودة بالرابط الحالي
    console.log("product id is:", x);

    this.route.paramMap.subscribe(params => console.log(params.get("id")));
  }

  ClickToReturn(){
    this.router.navigate(["/products"]); // ترجع المستخدم الى صفحة products
  }
}