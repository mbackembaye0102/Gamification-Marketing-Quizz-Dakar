import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { CeiboShare } from 'ng2-social-share';
import { TestComponent } from './test/test.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { AViewComponent } from './aview/aview.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HeaderComponent,
    CeiboShare,
    TestComponent,
    AViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,
   FormsModule,
   ReactiveFormsModule,
   JwSocialButtonsModule,
   BrowserAnimationsModule,
   Ng2PageScrollModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
