import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})

export class ScrollToTopComponent {
  isShow: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShow = window.scrollY > 600;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}