import { Component } from '@angular/core';
import { MissionCommandPanel } from '../mission-command-panel/mission-command-panel';
import { MissionLog } from '../mission-log/mission-log';

@Component({
  selector: 'app-mission-control-mission',
  imports: [MissionCommandPanel, MissionLog],
  templateUrl: './mission-control-mission.html',
  styleUrl: './mission-control-mission.css',
})
export class MissionControlMission {}
