import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeroSectionComponent } from './components/shared/hero-section/hero-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsSectionComponent } from './components/shared/projects-section/projects-section.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroSectionComponent,
    ProjectsSectionComponent,
    NavbarComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
