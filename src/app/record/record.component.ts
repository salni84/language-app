import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {WordService} from "../service/word.service";
// @ts-ignore
import * as RecordRTC from 'recordrtc'
import {Word} from "../types/Word";
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {

  public record: any;
  public error: any;
  public germanWord: string = '';
  public translation: string = '';
  public url: any;

  constructor( private wordService: WordService) {}


  saveWord() {
    let word: Word = {
      id: 99,
      word: this.germanWord,
      translation: this.translation,
      audio: ""
    }

    this.wordService.newWord(word).subscribe((word) => console.log(word))
  }
}
