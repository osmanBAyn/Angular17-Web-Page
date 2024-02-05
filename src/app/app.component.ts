import { Component, InputSignal, OnInit, Signal, WritableSignal, computed, effect, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setInterval } from 'timers/promises';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  items = [1,1,1,1];

}
