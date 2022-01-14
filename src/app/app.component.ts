import { Component } from '@angular/core';
import { I18nService } from './study/share/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private i18nService: I18nService) {
    this.i18nService.changeLocale('zh_CN');
  }
  title = 'test-demo';
}
