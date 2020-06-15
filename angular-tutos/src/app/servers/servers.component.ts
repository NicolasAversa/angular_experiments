import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Ningún servidor ha sido creado';
  serverName: string = 'Servidor de prueba';
  serverCreated: boolean = false;
  servers: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  handleCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Un servidor ha sido creado. Su nombre es ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
  }
}
