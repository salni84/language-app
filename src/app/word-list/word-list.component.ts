import {Component, OnInit} from '@angular/core';
import { Word } from '../types/Word';
import {WordService} from "../service/word.service";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit{

  public words: Word[] | null = null;
  public showTranslationAndAudio: boolean = false;
  public visibleElement: number = 0
  public isAdmin: boolean = false;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.wordService.readWords().subscribe((word) => {
      this.words = word;
    })
    if (localStorage.getItem('isAdmin') === 'true'){
      this.isAdmin = true;
    }
  }

  public showTranslation(index: number) {
    this.visibleElement = index
    this.showTranslationAndAudio = !this.showTranslationAndAudio
  }

  public deleteWord(id: number) {
    this.wordService.deleteWord(id).subscribe((id) => {
      this.getWords()
    } )
  }

  public getWords() {
    this.wordService.readWords().subscribe((words) => {
      this.words = words
    })
  }
}
