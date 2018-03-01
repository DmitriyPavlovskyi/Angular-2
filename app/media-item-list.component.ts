import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    // Получаем данные из сервиса при инициализации
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    // Удаляем данные через сервис
    this.mediaItemService.delete(mediaItem);
  }
}
