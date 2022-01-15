import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyRoutingModule } from './study-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FeaturesModule } from './features/features.module';
import { ShareModule } from './share/share.module';
@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
    TranslateModule,
    ShareModule,
    StudyRoutingModule
  ],
  declarations: [],
  exports: [ShareModule]
})
export class StudyModule { }
