import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  open = false

  toggle() {
    this.open = !this.open
  }

  constructor() { }

  ngOnInit() {
  }

}
