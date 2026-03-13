export type AlertParameter =
  | "Temperature"
  | "Turbidity"
  | "Salinity"
  | "pH";

export type AlertSeverity =
  | "warning"
  | "critical";

export type AlertStatus =
  | "active"
  | "resolved";

export interface Alert {
  id: string;
  site: string;
  parameter: AlertParameter;
  value: string;
  severity: AlertSeverity;
  time: string;
  status: AlertStatus;
}