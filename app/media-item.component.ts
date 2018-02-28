import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  // В input можно передать параметр строкой, с указанием к чему привязывать контектс
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  handleDelete() {
    console.log('---Deleting media item')
    // Можно передать параметр с данными, которые отправим в ответ
    this.delete.emit(this.mediaItem);
  }
}
