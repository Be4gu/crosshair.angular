import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonClipComponent } from './components/button-clip/button-clip.component';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ButtonTypeComponent } from './components/button-type/button-type.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { MirasComponent } from './components/miras/miras.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonClipComponent,
    CardComponent,
    MainComponent,
    HeaderComponent,
    SearcherComponent,
    ButtonTypeComponent,
    SubMenuComponent,
    MirasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
