import {Component, OnInit} from '@angular/core';
import {Word} from "../types/Word";
import {WordService} from "../service/word.service";

@Component({
  selector: 'app-word-test',
  templateUrl: './word-test.component.html',
  styleUrls: ['./word-test.component.scss']
})
export class WordTestComponent implements OnInit{


  public words: Word[] | null = null;
  public enteredWord: string | null =  null;
  public currentWord: Word;
  public resultMessage: string;


  constructor(private wordService: WordService) {}
  ngOnInit(): void {
    this.wordService.readWords().subscribe((word) => {
      this.words = word;
      this.currentWord = word[0]
    })
  }

  public startTest() {
    this.resultMessage = '';
    const randomIndex = Math.floor(Math.random() * (this.words?.length ?? 1))
    if (this.words){
      this.currentWord = this.words[randomIndex]
    }
  }

  public compareWord() {
    if (this.enteredWord && this.enteredWord === this.currentWord.translation){
      this.resultMessage = 'Die Antwort ist korrekt!'
      this.enteredWord = '';
    }
    else {
      this.resultMessage = 'Die Antwort ist leider falsch!'
    }
  }
}
