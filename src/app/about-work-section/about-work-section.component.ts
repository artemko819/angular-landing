import { Component, OnInit } from '@angular/core';
import ImageBlock from '../interfaces/image-block.interface';
import Work from '../interfaces/work.intefrace';
import { IMAGEBLOCK, WORKS } from '../utils/data';

@Component({
  selector: 'app-about-work-section',
  templateUrl: './about-work-section.component.html',
  styleUrls: ['./about-work-section.component.scss'],
})
export class AboutWorkSectionComponent implements OnInit {
  works: Work[] = WORKS;
  images: ImageBlock[] = IMAGEBLOCK;
  active: number = 0;
  constructor() {}

  ngOnInit(): void {}

  handleClick(i: number) {
    this.active = i;
  }
}
