import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

/**
 * 自定义实现Translate
 */
export class MyHttpLoader extends TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return of(this.loadResource(lang));
    }

    // 按照语言属性动态加载资源文件
    loadResource(lang: string) {
        const i18n = {
            common: require(`../../../../assets/i18n/${lang}/common.json`),
        };
        return i18n;
    }
}
