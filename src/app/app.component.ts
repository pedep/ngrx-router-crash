import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  private cnt = 0;
  ngOnInit() {

    this.router.events.subscribe(e => {
      this.cnt = this.cnt + 1;

      if (this.cnt < 200) {
        console.log(e)
      }
    });
  }
}
