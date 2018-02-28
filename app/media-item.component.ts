import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  // В input можно передать параметр строкой, с указанием к чему привязывать контектс
  @Input() mediaItem;

  handleDelete() {
    console.log('---Deleting media item')
  }
}
