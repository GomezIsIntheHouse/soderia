import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const APP_ROUTES:Routes = [
    { path:'home', component: HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'productos', component:ProductsComponent },
    { path:'producto/:id', component:ProductComponent },
    { path:'buscar/:termino', component:SearchComponent },
    {path:'contacto', component:ContactoComponent},
    { path:'**',pathMatch:'full', redirectTo:'home' }

]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
