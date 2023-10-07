import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordComponent} from "./record/record.component";
import {WordListComponent} from "./word-list/word-list.component";
import {HomescreenComponent} from "./homescreen/homescreen.component";
import {WordTestComponent} from "./word-test/word-test.component";

const routes: Routes = [
  {path: '', component: HomescreenComponent},
  {path: 'record', component: RecordComponent},
  {path: 'learn', component: WordListComponent},
  {path: 'test', component: WordTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
