import { Pipe } from '@angular/core';

// Делаем кастомный пайп.
// name - как темплейт будет обращаться к нему
// pure - указывает есть ли у пайпа сайд эффекты. По дефолту они pure
@Pipe({
  name: 'categoryList'
})

export class CategoryListPipe {
  transform(mediaItems) {
    let categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
