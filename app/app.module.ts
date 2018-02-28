import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';

@NgModule({
  //Импорт необходимых модулей для этого модуля
  imports: [
    BrowserModule
  ],
  // Позволяет использовать компоненты, директивы и пайпы в этом модуле
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent
  ],
  // Помогает ангулару понять какой компонент или компоненты являются корневыми, чтоб использовать бутстрап
  bootstrap: [
  AppComponent
  ]
})
export class AppModule {}
