import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../share/services/i18n.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.less']
})
export class TranslateComponent implements OnInit {

    constructor(private i18nService: I18nService) {}

  ngOnInit() {
    // this.i18nService.changeLocale('zh_CN');
  }

}
