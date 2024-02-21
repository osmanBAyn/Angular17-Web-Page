import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
