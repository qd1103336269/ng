import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../share/services/i18n.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
    constructor(private i18nService: I18nService) {}

    ngOnInit() {
        this.i18nService.changeLocale('zh_CN');
    }
}
