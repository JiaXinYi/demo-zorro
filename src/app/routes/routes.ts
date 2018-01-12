import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { FormComponent } from '../form/form.component';


export const routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: FormComponent }
        ]
    },

];