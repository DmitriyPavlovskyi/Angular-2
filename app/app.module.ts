import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemFormComponent } from './media-item-form.component';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
  //Импорт необходимых модулей
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Позволяет использовать компоненты, директивы и пайпы в этом модуле
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    MediaItemFormComponent,
    CategoryListPipe
  ],
  // Помогает ангулару понять какой компонент или компоненты являются корневыми, чтоб использовать бутстрап
  bootstrap: [
  AppComponent
  ]
})
export class AppModule {}
