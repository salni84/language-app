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

  public recording: boolean;
  public record: any;
  public error: any;
  public recordNewAudio: boolean = false;
  public germanWord: string = '';
  public translation: string = '';
  public url: any;
  public blob: any;

  constructor(private domSanitizer: DomSanitizer, private wordService: WordService) {
  }


  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url)
  }

  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser'
  }

  startRecording() {
    this.url = null;
    this.blob = null;
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    }
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this))
  }

  successCallback(stream: any) {
    let options = {
      mimeType: 'audio/wav',
    }
    let StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options)
    this.record.record()
  }

  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this))
  }

  processRecording(blob: any) {
    this.blob = blob
    this.url = URL.createObjectURL(blob)
  }

  saveAudioFile() {
    let reader = new FileReader();
    reader.readAsDataURL(this.blob);
    reader.onload = () => {
      this.saveWord(reader.result)
    }
  }

  saveWord(base64: any) {
    let word: Word = {
      id: 99,
      word: this.germanWord,
      translation: this.translation,
      audio: base64,
    }

    this.wordService.newWord(word).subscribe((word) => console.log(word))
  }
}
