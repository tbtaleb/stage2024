import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/pic1.jpg',
      title: 'First slide',
      subtitle: 'The work is what matters. — Jhin',
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/pic2.jpg',
      title: 'Second slide',
      subtitle: 'A True Master Is An Eternal Student. — Master YI',
    };
    this.slides[2] = {
      id: 2,
      src: 'assets/pic3.jpg',
      title: 'Third slide',
      subtitle: 'We Are What We Overcome. — Pantheon',
    };
  }
}
