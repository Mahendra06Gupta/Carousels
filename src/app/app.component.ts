import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  options = { fullWidth: false, numVisible: 5, dist: 0, padding: 65 };
  classname: number;
  items = [
    'assets/images/Drink.png',
    'assets/images/Desi.png',
    'assets/images/Healthy&Nutty.png',
    'assets/images/Fruity.png',
    'assets/images/spicy.png',
    'assets/images/OurOwn.png'
  ];

  hrefs = ['one', 'two', 'three', 'four', 'five', 'six'];
  topposition = ['-90', '25', '90', '105', '90', '25'];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // ERROR
    // Error: Cannot read property 'clientWidth' of undefined
    // let elems = document.querySelectorAll('.carousel');
    // let instances = M.Carousel.init(elems, this.options);
    this.classname = 0;
  }

  ngAfterViewInit() {
    // no errors
    // let elems = document.querySelectorAll('.carousel');
    // let instances = M.Carousel.init(elems, this.options);
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.carousel');
      
      var instances = M.Carousel.init(elems,
        { fullWidth: false, numVisible: 5, dist: 0, padding: 65, onCycleTo: (data: any) => {
          if ($(data).hasClass('active')) {
            this.shiftArrayToRight(this.topposition, $(data).index());
            console.log(this.topposition);
            this.topposition[$(data).index()] = this.topposition[0];
            
            // for (let i = 0 ; i < this.topposition.length; i++ ) {
            //   this.topposition[$(data).index()].push(this.topposition[i])
            // }
          }
        }, }
      );
      
    });
  }

  shiftArrayToRight = function (arr, places) {
    for (var i = 0; i < places; i++) {
      arr.unshift(arr.pop());
    }
  }


}
