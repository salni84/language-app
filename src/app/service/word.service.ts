import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Word } from '../types/Word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

 //  SERVER_API = "http://localhost:3000/word";

    SERVER_API = "https://language-express-0df724d1d304.herokuapp.com/word"

  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
  };

  constructor(private httpClient: HttpClient) {
  }

  readWords(): Observable<Word[]> {
    return this.httpClient.get<Word[]>(`${this.SERVER_API}/all`, {headers: this.headers});
  }

  readWordById(id: number): Observable<Word> {
    return this.httpClient.get<Word>(`${this.SERVER_API}/` + id, {headers: this.headers});
  }

  deleteWord(id: number): Observable<any> {
    return this.httpClient.delete<Word>(`${this.SERVER_API}/delete/` + id);
  }

  updateWord(id: number, word: Word): Observable<any> {
    return this.httpClient.put<Word>(`${this.SERVER_API}/update/` + id, word);
  }

  newWord(word: Word): Observable<Word> {
    return this.httpClient.post<Word>(`${this.SERVER_API}/new`, word, {headers: this.headers});
  }
}
