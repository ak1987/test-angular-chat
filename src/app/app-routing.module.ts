import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent }   from './chat/chat.component';
import { ChatlistComponent} from "./chatlist/chatlist.component";

const routes: Routes = [
  { path: '', redirectTo: '/chats', pathMatch: 'full' },
  { path: 'chats', component: ChatlistComponent },
  { path: 'chat/:id', component: ChatComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}