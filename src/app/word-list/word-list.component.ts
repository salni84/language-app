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

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.wordService.readWords().subscribe((word) => {
      this.words = word;
    })
  }

  showTranslation(index: number) {
    this.visibleElement = index
    this.showTranslationAndAudio = !this.showTranslationAndAudio
  }
}
