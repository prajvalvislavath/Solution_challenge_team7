import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from './environments/environment.prod';
import { RegistartionComponent } from './registartion/registartion.component';
import { VerifyAddressComponent } from './verify-address/verify-address.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistartionComponent,
    LoginComponent,
    VerifyAddressComponent,
    ForgotPasswordComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFirestoreModule,
    AngularFireModule,
    CommonModule

    
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
