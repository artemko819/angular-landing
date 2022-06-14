import { Component, OnInit } from '@angular/core';
import Link from '../interfaces/link.interface';
import { LINKS, MOBILELINKS, MOBILELINKSSERVICE } from '../utils/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links: Link[] = LINKS;
  mobileLinks: Link[] = MOBILELINKS;
  mobileLinksServices:Link[] = MOBILELINKSSERVICE;
  activeLink: number = 0;
  showMenu:boolean = false
  constructor() {}
  
  ngOnInit(): void {
    window.addEventListener('scroll',(e)=>{
      if( window.scrollY === 0) {
        this.activeLink = 0
      }
    })
  }
  
  setActive(i: number) {
    this.activeLink = i;
    setTimeout(()=>{
      this.showMenu = !this.showMenu
    },500)

  }

  toggle(){
    this.showMenu = !this.showMenu
  }
  
}
