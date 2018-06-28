import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaOutletComponent } from 'natrium-lib';
import { NatriumLibIntroduceComponent } from './pages/natrium-lib/natrium-lib-introduce/natrium-lib-introduce.component';
import { MainComponent } from './pages/main/main.component';
import { BulmaButtonComponent } from './pages/bulma-components/bulma-button/bulma-button.component';
import { BulmaExtensionsDividerComponent } from './pages/bulma-extensions-components/bulma-extensions-divider/bulma-extensions-divider.component';
import { NalibTableComponent } from './pages/natrium-lib/nalib-table/nalib-table.component';
import { NalibFormComponent } from './pages/natrium-lib/nalib-form/nalib-form.component';
import { NalibDetailEditorComponent } from './pages/natrium-lib/nalib-detail-editor/nalib-detail-editor.component';
import { NalibComponentHostComponent } from './pages/natrium-lib/nalib-component-host/nalib-component-host.component';
import { NalibOutletComponent } from './pages/natrium-lib/nalib-outlet/nalib-outlet.component';
import { NalibPaginationComponent } from './pages/natrium-lib/nalib-pagination/nalib-pagination.component';


const overviewRoutes = [{
	path: 'natrium-lib-intro', component: NatriumLibIntroduceComponent,
}, {
	path: '**', redirectTo: 'natrium-lib-intro',
}]

const natriumLibDocRoutes = [{
	path: 'na-table', component: NalibTableComponent,
}, {
	path: 'na-form', component: NalibFormComponent,
}, {
	path: 'na-detail-editor', component: NalibDetailEditorComponent,
}, {
	path: 'na-component-host', component: NalibComponentHostComponent,
}, {
	path: 'na-outlet', component: NalibOutletComponent,
}, {
	path: 'na-pagination', component: NalibPaginationComponent,
}, {
	path: '**', redirectTo: 'na-table',
}]

const bulmaDocRoutes = [{
	path: 'button', component: BulmaButtonComponent
}]

const bulmaExtensionsDocRoutes = [{
	path: 'divider', component: BulmaExtensionsDividerComponent
}, {
	path: '**', redirectTo: 'divider',
}]

const appRoutes: Routes = [{
	path: 'main', component: MainComponent
}, {
	path: 'overview-docs', component: NaOutletComponent, children: overviewRoutes
}, {
	path: 'natrium-lib-docs', component: NaOutletComponent, children: natriumLibDocRoutes
}, {
	path: 'bulma-component-docs', component: NaOutletComponent, children: bulmaDocRoutes
}, {
	path: 'bulma-extensions-component-docs', component: NaOutletComponent, children: bulmaExtensionsDocRoutes
}, {
	path: '**', redirectTo: 'main', pathMatch: 'full'
}];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
