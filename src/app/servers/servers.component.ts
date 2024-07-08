import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus='no server was created';
  serverName='----';
  serverCreated=false;

  constructor() 
  {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    
  }
    onCreateServer()
    {
      debugger
      this.serverCreated=true;
      this.serverCreationStatus='Server is being created';
    }
    onUpdateServerName(event:Event)
    {
      this.serverName=(<HTMLInputElement>event.target).value; 
    }

  
}

