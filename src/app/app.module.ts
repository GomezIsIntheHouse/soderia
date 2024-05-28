import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsService } from './services/products.service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PerfilComponent } from './components/shared/perfil/perfil.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

// import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    ProductComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    ProductCardComponent,
    FooterComponent,
    ContactoComponent,
    PerfilComponent,
    SidebarComponent,
    SliderComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    RouterModule
  
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
