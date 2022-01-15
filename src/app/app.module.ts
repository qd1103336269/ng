import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHttpLoader } from './study/share/i18n/MyHttpLoader';
import { StudyModule } from './study/study.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

registerLocaleData(zh);

// 加载资源文件
function createTranslateLoader() {
    return new MyHttpLoader();
}

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule,
        StudyModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
            },
            defaultLanguage: 'zh_CN',
        }),
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [TranslateService, { provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent],
})
export class AppModule {}
