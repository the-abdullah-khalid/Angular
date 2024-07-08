import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   serverElements = [
//     {
//       type: 'blueprint', name: 'testserver', content: 'just a test!'
//     },
//     {
//       type: 'server', name: 'testserver', content: 'just a test!'
//     }
//   ];

//   onServerAdded(serverData: { serverName: string, serverContent: string }) {
    
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });

//   }


//   onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent
//     });
//   }
// }
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
