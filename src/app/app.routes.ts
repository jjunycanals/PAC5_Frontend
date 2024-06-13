import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/image/image.component';
import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: '',
    component: ImagesComponent,
  },
  {
    path: 'image/:id',
    component: ImageComponent,
  },
  {
    path: 'list',
    component: ComponentListComponent,
  },
  {
    path: 'list/:id',
    component: ComponentDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
