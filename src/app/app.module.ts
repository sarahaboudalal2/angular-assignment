import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, ProductsComponent, TableComponent],
  imports: [BrowserModule, TableModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
