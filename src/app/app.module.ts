import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NatriumLibModule } from 'natrium-lib';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './pages/app/app.component';
import { NatriumLibIntroduceComponent } from './pages/natrium-lib/natrium-lib-introduce/natrium-lib-introduce.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

import { BulmaButtonComponent } from './pages/bulma-components/bulma-button/bulma-button.component';
import { BulmaExtensionsDividerComponent } from './pages/bulma-extensions-components/bulma-extensions-divider/bulma-extensions-divider.component';
import { NalibTableComponent } from './pages/natrium-lib/nalib-table/nalib-table.component';
import { NalibFormComponent } from './pages/natrium-lib/nalib-form/nalib-form.component';
import { NalibDetailEditorComponent } from './pages/natrium-lib/nalib-detail-editor/nalib-detail-editor.component';
import { NalibComponentHostComponent } from './pages/natrium-lib/nalib-component-host/nalib-component-host.component';
import { NalibOutletComponent } from './pages/natrium-lib/nalib-outlet/nalib-outlet.component';
import { NalibPaginationComponent } from './pages/natrium-lib/nalib-pagination/nalib-pagination.component';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		NatriumLibIntroduceComponent,
		BulmaButtonComponent,
		BulmaExtensionsDividerComponent,
		NalibTableComponent,
		NalibFormComponent,
		NalibDetailEditorComponent,
		NalibComponentHostComponent,
		NalibOutletComponent,
		NalibPaginationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		NatriumLibModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
