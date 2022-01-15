import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../share/services/auth.service';
import { I18nService } from '../../share/services/i18n.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
    constructor(private i18nService: I18nService, private auth: AuthService) {}

    ngOnInit() {
    }

    logout() {
        this.auth.logout();
    }
}
