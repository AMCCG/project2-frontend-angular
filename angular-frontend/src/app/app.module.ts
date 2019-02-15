import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShareModule } from './modules/share-modules/share.module';
import { AppRouting } from './route/app-routing.module';
import { AppAuthenticationComponent } from './modules/app-authentication/app-authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    AppAuthenticationComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
