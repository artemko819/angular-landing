import { Component, OnInit } from '@angular/core';
import Service from '../interfaces/service.interface';
import { SERVICES } from '../utils/data';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {
  services: Service[] = SERVICES;
  constructor() {}

  ngOnInit(): void {}
}
