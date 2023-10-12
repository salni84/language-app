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
  public showAnswer: boolean;


  constructor(private wordService: WordService) {}
  ngOnInit(): void {
    this.wordService.readWords().subscribe((word) => {
      this.words = word;
      const randomIndex = Math.floor(Math.random() * (this.words?.length ?? 1))
      this.currentWord = word[randomIndex]
    })
  }

  public startTest() {
    this.showAnswer = false;
    this.resultMessage = '';
    this.enteredWord = '';
    const randomIndex = Math.floor(Math.random() * (this.words?.length ?? 1))
    if (this.words){
      this.currentWord = this.words[randomIndex]
    }
  }

  public compareWord() {
    if (this.enteredWord && this.enteredWord.toLowerCase() === this.currentWord.translation.toLowerCase()){
      this.resultMessage = 'Die Antwort ist korrekt!'
    }
    else {
      this.resultMessage = 'Die Antwort ist leider falsch!'
    }
  }

  public showCorrectAnswer(){
    this.showAnswer = !this.showAnswer
  }

  public enterSpecialCharacter(char: string) {
    if (this.enteredWord === null){
      this.enteredWord = ''
    }
    this.enteredWord = this.enteredWord + char
  }
}
