import { Component, OnInit } from '@angular/core';
import Info from '../interfaces/infos.interface';
import { INFOS } from '../utils/data';

@Component({
  selector: 'app-who-me-section',
  templateUrl: './who-me-section.component.html',
  styleUrls: ['./who-me-section.component.scss'],
})
export class WhoMeSectionComponent implements OnInit {
  infos: Info[] = INFOS;
  constructor() {}

  ngOnInit(): void {}
}
