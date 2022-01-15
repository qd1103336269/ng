import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../study/share/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
    validateForm!: FormGroup;
    username: string;
    password: string;
    constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true],
        });
    }

    submitForm() {
        if (this.validateForm.valid) {
            console.log('submit', this.validateForm.value);
        } else {
            Object.values(this.validateForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
    }

    doLogin() {
        this.username = this.validateForm.get('userName').value;
        this.password = this.validateForm.get('password').value;
        if (this.username === 'admin' && this.password === 'admin123') {
            window.localStorage.setItem('token', 'Bearer 12345');
            this.router.navigate(['']);
        } else {
            this.auth.logout();
        }
    }
}
