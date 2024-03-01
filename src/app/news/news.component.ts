import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  firstCardWidth : Number = 400;
  constructor(private renderer2:Renderer2) {
  }
  @ViewChild("carousel") carousel !: ElementRef;
  arrowClick(event : String){
    console.log(this.carousel.nativeElement.scrollLeft);
    this.renderer2.setProperty(this.carousel,"scrollLeft",this.carousel.nativeElement.scrollLeft+=event==='left'?-this.firstCardWidth:this.firstCardWidth);
  }
}
