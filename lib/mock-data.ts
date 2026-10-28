export type SiteStatus = "active" | "warning" | "offline";
export type UserRole = "Admin" | "Technical Staff" | "Farmer";
export type UserStatus = "active" | "disabled";
export type AlertParameter = "Temperature" | "Turbidity" | "Salinity" | "pH";
export type AlertSeverity = "warning" | "critical";
export type AlertStatus = "active" | "resolved";

export interface MonitoringSite {
  id: string;
  code: string;
  name: string;
  location: string;
  county: string;
  farmer: string;
  sensors: number;
  lastUpdate: string;
  status: SiteStatus;
  temperature: number;
  ph: number;
  salinity: number;
  turbidity: number;
  battery: number;
  signal: number;
}

export interface PlatformUser {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  phone: string;
  site: string;
  status: UserStatus;
}

export interface PlatformAlert {
  id: string;
  site: string;
  parameter: AlertParameter;
  value: string;
  severity: AlertSeverity;
  time: string;
  status: AlertStatus;
  description: string;
}

export interface MonitoringThreshold {
  key: string;
  title: string;
  unit: string;
  min: number;
  max: number;
}

export interface PlatformReport {
  id: string;
  title: string;
  site: string;
  date: string;
  status: string;
}

export interface PlatformIntegration {
  id: string;
  title: string;
  description: string;
  category: string;
  connected: boolean;
  lastSync: string;
}

export const sites: MonitoringSite[] = [
  { id: "imta-cage-1", code: "BCN-KLF-001", name: "IMTA Cage 1", location: "Mtwapa Creek", county: "Kilifi", farmer: "Amina Juma", sensors: 4, lastUpdate: "2 minutes ago", status: "active", temperature: 27.4, ph: 7.9, salinity: 33.1, turbidity: 4.2, battery: 92, signal: 91 },
  { id: "imta-cage-2", code: "BCN-KLF-002", name: "IMTA Cage 2", location: "Mtwapa Creek", county: "Kilifi", farmer: "Hassan Ali", sensors: 4, lastUpdate: "3 minutes ago", status: "active", temperature: 28.1, ph: 7.8, salinity: 34.0, turbidity: 5.1, battery: 86, signal: 88 },
  { id: "seaweed-line-a", code: "BCN-KLF-003", name: "Seaweed Line A", location: "Kuruwitu Coast", county: "Kilifi", farmer: "Fatuma Said", sensors: 3, lastUpdate: "1 minute ago", status: "warning", temperature: 29.6, ph: 7.7, salinity: 32.4, turbidity: 8.7, battery: 68, signal: 76 },
  { id: "seaweed-line-b", code: "BCN-KLF-004", name: "Seaweed Line B", location: "Kuruwitu Coast", county: "Kilifi", farmer: "Juma Bakari", sensors: 3, lastUpdate: "4 minutes ago", status: "active", temperature: 27.8, ph: 8.0, salinity: 33.3, turbidity: 3.6, battery: 91, signal: 84 },
  { id: "oyster-rack-1", code: "BCN-KLF-005", name: "Oyster Rack 1", location: "Vipingo Shore", county: "Kilifi", farmer: "Rehema Mwangangi", sensors: 3, lastUpdate: "6 minutes ago", status: "active", temperature: 26.9, ph: 7.9, salinity: 34.2, turbidity: 4.8, battery: 88, signal: 81 },
  { id: "nursery-pond-1", code: "BCN-KWA-006", name: "Nursery Pond 1", location: "Diani Lagoon", county: "Kwale", farmer: "Salim Charo", sensors: 3, lastUpdate: "5 minutes ago", status: "active", temperature: 28.4, ph: 7.6, salinity: 31.8, turbidity: 6.1, battery: 79, signal: 73 },
  { id: "mangrove-edge-1", code: "BCN-KWA-007", name: "Mangrove Edge 1", location: "Gazi Bay", county: "Kwale", farmer: "Zawadi Kombe", sensors: 2, lastUpdate: "48 minutes ago", status: "offline", temperature: 27.2, ph: 7.8, salinity: 32.8, turbidity: 5.4, battery: 21, signal: 0 },
  { id: "landing-station-1", code: "BCN-KWA-008", name: "Landing Station 1", location: "Shimoni Landing", county: "Kwale", farmer: "Mariam Binti", sensors: 2, lastUpdate: "1 hour ago", status: "offline", temperature: 26.8, ph: 7.9, salinity: 33.0, turbidity: 4.9, battery: 9, signal: 0 },
];

export const users: PlatformUser[] = [
  { id: "U001", name: "Project Administrator", role: "Admin", email: "admin@baharicbo.org", phone: "0712729004", site: "All sites", status: "active" },
  { id: "U002", name: "Technical Coordinator", role: "Technical Staff", email: "tech@baharicbo.org", phone: "0708872299", site: "All sites", status: "active" },
  { id: "U003", name: "Amina Juma", role: "Farmer", email: "amina.juma@baharicbo.com", phone: "0722334455", site: "IMTA Cage 1", status: "active" },
  { id: "U004", name: "Hassan Ali", role: "Farmer", email: "hassan.ali@baharicbo.com", phone: "0722445566", site: "IMTA Cage 2", status: "active" },
  { id: "U005", name: "Fatuma Said", role: "Farmer", email: "fatuma.said@baharicbo.com", phone: "0722556677", site: "Seaweed Line A", status: "active" },
  { id: "U006", name: "Juma Bakari", role: "Farmer", email: "juma.bakari@baharicbo.com", phone: "0722667788", site: "Seaweed Line B", status: "active" },
  { id: "U007", name: "Rehema Mwangangi", role: "Farmer", email: "rehema.m@baharicbo.com", phone: "0722778899", site: "Oyster Rack 1", status: "active" },
  { id: "U008", name: "Salim Charo", role: "Farmer", email: "salim.charo@baharicbo.com", phone: "0722889900", site: "Nursery Pond 1", status: "active" },
  { id: "U009", name: "Zawadi Kombe", role: "Farmer", email: "zawadi.kombe@baharicbo.com", phone: "0722990011", site: "Mangrove Edge 1", status: "active" },
  { id: "U010", name: "Mariam Binti", role: "Farmer", email: "mariam.binti@baharicbo.com", phone: "0733001122", site: "Landing Station 1", status: "active" },
  { id: "U011", name: "Field Technician 2", role: "Technical Staff", email: "field2@baharicbo.org", phone: "0733112233", site: "Kilifi Coast", status: "active" },
  { id: "U012", name: "Data Officer", role: "Technical Staff", email: "data@baharicbo.org", phone: "0733223344", site: "Network operations", status: "active" },
];

export const alerts: PlatformAlert[] = [
  { id: "A-124", site: "Seaweed Line A", parameter: "Temperature", value: "29.6 °C", severity: "warning", time: "Today, 10:42 AM", status: "active", description: "Temperature is approaching the configured upper limit." },
  { id: "A-123", site: "Landing Station 1", parameter: "Salinity", value: "33.0 ppt", severity: "critical", time: "Today, 10:18 AM", status: "active", description: "Device has not reported recently; last known reading retained." },
  { id: "A-122", site: "Mangrove Edge 1", parameter: "Temperature", value: "27.2 °C", severity: "critical", time: "Today, 09:55 AM", status: "active", description: "Gateway is offline and requires a connectivity check." },
  { id: "A-121", site: "IMTA Cage 1", parameter: "Turbidity", value: "8.4 NTU", severity: "warning", time: "Today, 09:26 AM", status: "active", description: "Turbidity has increased across recent readings." },
  { id: "A-120", site: "Nursery Pond 1", parameter: "pH", value: "7.6", severity: "warning", time: "Today, 08:40 AM", status: "active", description: "pH is within range but trending toward the lower limit." },
  { id: "A-119", site: "Seaweed Line B", parameter: "Temperature", value: "27.8 °C", severity: "warning", time: "Yesterday, 04:12 PM", status: "active", description: "Temperature variation flagged for routine review." },
  { id: "A-118", site: "IMTA Cage 2", parameter: "Salinity", value: "34.0 ppt", severity: "warning", time: "Yesterday, 02:30 PM", status: "active", description: "Salinity crossed the preferred band briefly." },
  { id: "A-117", site: "IMTA Cage 2", parameter: "pH", value: "7.8", severity: "warning", time: "Yesterday, 11:06 AM", status: "resolved", description: "Reading returned to the configured range." },
  { id: "A-116", site: "Oyster Rack 1", parameter: "Temperature", value: "26.9 °C", severity: "warning", time: "26 Oct, 03:44 PM", status: "resolved", description: "Temperature stabilized after a short fluctuation." },
  { id: "A-115", site: "Seaweed Line A", parameter: "Turbidity", value: "6.2 NTU", severity: "warning", time: "26 Oct, 10:12 AM", status: "resolved", description: "Turbidity returned to its normal operating band." },
];

export const thresholds: MonitoringThreshold[] = [
  { key: "temperature", title: "Temperature", unit: "°C", min: 24, max: 31 },
  { key: "ph", title: "pH", unit: "pH", min: 7.2, max: 8.6 },
  { key: "salinity", title: "Salinity", unit: "ppt", min: 28, max: 38 },
  { key: "turbidity", title: "Turbidity", unit: "NTU", min: 0, max: 10 },
];

export const reports: PlatformReport[] = [
  { id: "R-026", title: "Weekly Environmental Summary", site: "All monitoring sites", date: "2026-10-26", status: "Ready" },
  { id: "R-025", title: "Monthly Water Quality Analysis", site: "Kilifi Coast", date: "2026-10-01", status: "Ready" },
  { id: "R-024", title: "Connectivity and Device Health", site: "All monitoring sites", date: "2026-09-28", status: "Ready" },
  { id: "R-023", title: "Farmer Site Activity", site: "Kwale Coast", date: "2026-09-21", status: "Ready" },
];

export const integrations: PlatformIntegration[] = [
  { id: "iot-api", title: "IoT Data API", description: "Ingest readings from deployed monitoring devices and gateway services.", category: "Data", connected: true, lastSync: "2 minutes ago" },
  { id: "sms-gateway", title: "SMS Alert Gateway", description: "Deliver priority alerts to assigned technical staff and site contacts.", category: "Notifications", connected: true, lastSync: "6 minutes ago" },
  { id: "weather-service", title: "Weather Data Service", description: "Bring local weather context into environmental monitoring reports.", category: "External data", connected: false, lastSync: "Not synced" },
];

export const weeklyReadings = [
  { day: "Wed", value: 26.8 }, { day: "Thu", value: 27.1 }, { day: "Fri", value: 27.5 },
  { day: "Sat", value: 28.2 }, { day: "Sun", value: 27.6 }, { day: "Mon", value: 28.0 }, { day: "Tue", value: 27.4 },
];
