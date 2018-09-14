import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No servers were created!';
  serverName = '';

  constructor() {
      setTimeout(() => { this.allowNewServer = true; },2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement> event.target).value);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
