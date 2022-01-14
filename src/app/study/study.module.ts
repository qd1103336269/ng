import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyRoutingModule } from './study-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FeaturesModule } from './features/features.module';
@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
    TranslateModule,
    StudyRoutingModule
  ],
  declarations: []
})
export class StudyModule { }
