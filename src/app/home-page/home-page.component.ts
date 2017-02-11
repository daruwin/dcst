import { Component, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AngularFireService } from '../providers/angular-fire.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewChecked {

  public newMessage: string;
  public messages: FirebaseListObservable<any>;

  constructor(public angularfire_service: AngularFireService) {
    this.messages = this.angularfire_service.messages;
  }

  isYou(email) {
    if (email === this.angularfire_service.email) {
      return true;
    } else {
      return false;
    }
  }

  isMe(email) {
    if (email === this.angularfire_service.email) {
      return false;
    } else {
      return true;
    }
  }

  sendMessage() {
    this.angularfire_service.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log('Scroll to bottom failed!');
    }
  }

}
