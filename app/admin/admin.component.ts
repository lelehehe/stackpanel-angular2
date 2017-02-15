import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'story-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  constructor() { }
  title = 'Admin here';
  ngOnInit() { }
}
