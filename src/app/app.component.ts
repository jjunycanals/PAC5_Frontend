import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { ImagesService } from './services/images.service';
import { ImageComponent } from './components/image/image.component';
import { ImagesComponent } from './components/images/images.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    ImageComponent,
    ImagesComponent,
    ComponentDetailComponent,
    ComponentListComponent,
    NavComponent
  ],
  providers: [ApiService, ImagesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-pwa-introduction';
}
