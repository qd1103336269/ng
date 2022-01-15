import { NgModule } from "@angular/core";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
    imports: [NzFormModule, NzInputModule, NzButtonModule],
    declarations: [],
    exports: [NzFormModule, NzInputModule, NzButtonModule]
})

export class ShareModule{}