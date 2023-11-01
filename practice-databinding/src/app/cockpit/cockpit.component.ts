import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverData: { serverName: string; serverContent: string };
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    blueprintData: { serverName: string; serverContent: string };
  }>();

  constructor() {}

  ngOnInit(): void {}
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverData: {
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      },
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintData: {
        serverName: this.newServerName,
        serverContent: this.newServerContent,
      },
    });
  }
}
