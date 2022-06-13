import { Component, OnInit } from '@angular/core';
import About from '../interfaces/about.inteface';
import { TEXT } from '../utils/data';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
  texts: About[] = TEXT;
  constructor() {}

  ngOnInit(): void {}
}
