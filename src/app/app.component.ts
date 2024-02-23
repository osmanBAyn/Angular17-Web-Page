import {
  Component,
  ElementRef,
  HostListener,
  InputSignal,
  OnInit,
  Renderer2,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import {PerfectionComponent} from "./perfection/perfection.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, FooterComponent, NewsComponent, PerfectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('moveLogo', [
      state('start', style({ left : '0px', top: '0px'})),
      state('end', style({  })),
    ]),
  ],
})
export class AppComponent {
  constructor(private ElementRef: ElementRef, private renderer: Renderer2) {}
  // @ViewChild('home') homeComp!: ElementRef;
  // @ViewChild('firstS') firstS!: ElementRef;
  // @ViewChild('navbar') navbar!: ElementRef;
  // @ViewChild('secondS') secondS!: ElementRef;
  // @ViewChild('tubitechTextSvg') tubiTextSvg!: ElementRef;
  // @ViewChild('tubitechLogo') tubiLogo!: ElementRef;
  // @HostListener('window:scroll')
  // onWindowScroll() {
  //   const [red, green, blue] = [3, 147, 177];
  //   const [red2, green2, blue2] = [3, 48, 78];
  //   const y = 1 + (window.scrollY || window.pageYOffset);
  //   let backK = 1 + (window.scrollY || window.pageYOffset) / 50;
  //   backK = backK < 1 ? 1 : backK;
  //   // const [r, g, b] = [red / backK, green / backK, blue / backK].map(
  //   //   Math.round
  //   // );
  //   // const [r2, g2, b2] = [red2 / backK, green2 / backK, blue2 / backK].map(
  //   //   Math.round
  //   // );
  //   // this.renderer.setStyle(
  //   //   this.ElementRef.nativeElement.ownerDocument.body,
  //   //   'background',
  //   //   `radial-gradient(rgb(${r},${g},${b}),rgb(${r2},${g2},${b2}))`
  //   // );
  //   // this.renderer.setStyle(
  //   //   this.ElementRef.nativeElement.ownerDocument.body,
  //   //   'background-attachment',
  //   //   'fixed'
  //   // );

  //   // this.renderer.setStyle(
  //   //   this.homeComp.nativeElement,
  //   //   'opacity',
  //   //   1 - (y - 100) / 100
  //   // );
  //   // if (y >= 200) {
  //   //   // this.renderer.setStyle(
  //   //   //   this.homeComp.nativeElement,
  //   //   //   'visibility',
  //   //   //   'hidden'
  //   //   // );
  //   //   this.renderer.setStyle(this.firstS.nativeElement, 'display', 'flex');
  //   // } else {
  //   //   // this.renderer.setStyle(
  //   //   //   this.homeComp.nativeElement,
  //   //   //   'visibility',
  //   //   //   'visible'
  //   //   // );
  //   //   this.renderer.setStyle(this.firstS.nativeElement, 'display', 'none');
  //   // }
  //   // this.renderer.setStyle(
  //   //   this.firstS.nativeElement,
  //   //   'opacity',
  //   //   (y - 200) / 50
  //   // );
  //   // this.renderer.setStyle(
  //   //   this.navbar.nativeElement,
  //   //   'top',
  //   //   `${Math.min(y, 300) - 300}px`
  //   // );
  //   // if (y >= 300) {
  //   //   this.renderer.setStyle(this.secondS.nativeElement, 'display', 'flex');
  //   // } else {
  //   //   this.renderer.setStyle(this.secondS.nativeElement, 'display', 'none');
  //   // }
  //   // this.renderer.setStyle(
  //   //   this.secondS.nativeElement,
  //   //   'opacity',
  //   //   `${(y - 300) / 50}`
  //   // );

  // }
}
