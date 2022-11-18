import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  randomText: string = '';
  enteredText: string = '';
  randomTextSpacesCount: number = 0;
  enteredTextSpacesCount: number = 0;

  ngOnInit(): void {
    this.randomText = lorem.sentence();
    this.randomTextSpacesCount = this.randomText.split(' ').length-1;
    console.log("oninit", this.randomTextSpacesCount);
  }

  onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
    this.enteredTextSpacesCount = this.enteredText.split(' ').length-1;
  };

  compare = (randomLetter: string, enteredLetter: string): string => {

    if (!enteredLetter) {
      return "pending";
    }

    return randomLetter === enteredLetter ? "correct" : "incorrect";
  };
}
