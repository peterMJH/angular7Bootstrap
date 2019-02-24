import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { ContentsComponent } from './layout/contents/contents.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ATypePageComponent } from './a-type-page/a-type-page.component';
import { BTypePageComponent } from './b-type-page/b-type-page.component';

import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    TopMenuComponent,
    LeftMenuComponent,
    ContentsComponent,
    FooterComponent,
    ATypePageComponent,
    BTypePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
