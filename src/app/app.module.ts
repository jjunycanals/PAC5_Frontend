import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ImagesComponent } from "./components/images/images.component";
import { ImageComponent } from "./components/image/image.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ComponentDetailComponent } from "./components/component-detail/component-detail.component";
import { ComponentListComponent } from "./components/component-list/component-list.component";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ComponentDetailComponent,
    ComponentListComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
