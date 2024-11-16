import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {CollectionsComponent} from './pages/collections/collections/collections.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'collections/:name', component: CollectionsComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
