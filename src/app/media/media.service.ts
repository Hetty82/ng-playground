import { Injectable } from '@angular/core'

@Injectable()
export class MediaService {
  nowPlaying: string

  constructor() { }

  play(name: string) {
    if (name !== this.nowPlaying) {
      // pause playing media
    }
    this.nowPlaying = name
  }

}
