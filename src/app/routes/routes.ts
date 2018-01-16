import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
import { FormComponent } from '../form/form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditorComponent } from '../editor/editor.component';


export const routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'form', component: FormComponent },
            { path: 'editor', component: EditorComponent },
            { path: '**', component: PageNotFoundComponent }
        ]
    },

];
