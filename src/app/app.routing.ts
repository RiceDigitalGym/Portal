import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {DashComponent} from './dash/dash.component'


const appRoutes: Routes = [
	{path: "dash", component: DashComponent},
	{path: "", component: DashComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
