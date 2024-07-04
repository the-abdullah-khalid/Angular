import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  //newServerContent = '';

  onAddServer(serverContentInput:HTMLInputElement) 
  {

      this.serverCreated.emit(
        {
          serverName:this.newServerName,
          serverContent:serverContentInput.value
        }
      );

  }

  onAddBlueprint(serverContentInput:HTMLInputElement) 
  {
    this.blueprintCreated.emit(
      {
        serverName:this.newServerName,
        serverContent:serverContentInput.value
      }
    );
  }
}
