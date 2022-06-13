import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AboutWorkSectionComponent } from './about-work-section/about-work-section.component';
import { WhoMeSectionComponent } from './who-me-section/who-me-section.component';
import { PopOverComponent } from './pop-over/pop-over.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderSectionComponent,
    AboutSectionComponent,
    AboutWorkSectionComponent,
    WhoMeSectionComponent,
    PopOverComponent,
    ServicesSectionComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
