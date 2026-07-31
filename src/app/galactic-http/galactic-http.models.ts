export interface SwapiPerson {
  readonly name: string;
  readonly height: string;
  readonly birth_year: string;
  readonly eye_color: string;
}

export type ReportPriority = 'routine' | 'important' | 'critical';

export interface MissionReportForm {
  readonly officerName: string;
  readonly reportTitle: string;
  readonly message: string;
  readonly priority: ReportPriority;
}

export interface NewMissionReport extends MissionReportForm {
  readonly characterName: string;
  readonly userId: number;
}

export interface SavedMissionReport extends NewMissionReport {
  readonly id: number;
}
