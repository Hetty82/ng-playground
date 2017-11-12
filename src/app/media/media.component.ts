import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit {
  @Input() fileName: string
  @Input() type: 'video' | 'audio' | 'image'

  isSticky = false
  isSticking = false

  constructor() { }

  ngOnInit() {
    if (this.type === 'image') this.isSticky = true
  }
}
