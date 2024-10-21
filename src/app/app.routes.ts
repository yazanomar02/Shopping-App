import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetialComponent } from './products/product-detial/product-detial.component';
import { productDetialGuard } from './products/product-detial/product-detial.guard';
import { LatestNewsComponent } from './news/latest-news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsModule } from './news/news.module';
import { LoginComponent } from './account/login/login.component';

export const routes: Routes = [
    {path: "products", component: ProductListComponent},
    {path: "products/:id", component: ProductDetialComponent, canActivate: [productDetialGuard]},
    {path: "welcome", component: WelcomeComponent},
    {path: "account/login", component: LoginComponent},
    {path: "news", loadChildren: () => import("./news/news.module").then(n => n.NewsModule)}, // Modele
    {path: "about", loadComponent: () => import("./about-us/about-us.component").then(c => c.AboutUsComponent)}, // Standalone

    {path: "", component: WelcomeComponent},
    {path: "**", component: WelcomeComponent}
];