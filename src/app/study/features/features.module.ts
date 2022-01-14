import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateComponent } from './translate/translate.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FeaturesRoutingModule
  ],
  declarations: [TranslateComponent, HomeComponent]
})
export class FeaturesModule { }
