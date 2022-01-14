import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class I18nService {
    i18n: any;
    locale = 'zh_CN';

    constructor(private translate: TranslateService) {
        // 语言应该是后台返回
        translate.setDefaultLang(this.locale);
        this.loadResources(this.locale);
    }

    changeLocale(newLocale: string) {
        this.translate.use(newLocale);
        this.loadResources(newLocale);
    }

    getLocale() {
        return this.locale;
    }

    // 加载资源文件
    private loadResources(defaultLocale: string) {
        this.i18n = {
            common: require(`../../../../assets/i18n/${defaultLocale}/common.json`)
        };
    }

    getMessage(message = '', ...args: string[]) {
        if (!Array.isArray(args) || args.length === 0) {
            return message;
        }

        let tmpMsg = message;
        for (let i = 0; i < args.length; i++) {
            tmpMsg = tmpMsg.replace(`{{${i}}}`, args[i]);
        }

        return tmpMsg;
    }

    transform(query: string | string[], params?: Object) {
        return this.translate.instant(query, params);
    }
}
