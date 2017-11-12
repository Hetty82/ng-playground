import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { appRoutes } from './routes'

import { MediaService} from './media/media.service'

import { AppComponent } from './app.component'
import { TestComponent } from './test/test.component'
import { Test2Component } from './test2/test2.component'
import { StickiesComponent } from './stickies/stickies.component'
import { LayoutComponent } from './layout/layout.component'
import { HeaderComponent } from './header/header.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { MediaComponent } from './media/media.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    StickiesComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
