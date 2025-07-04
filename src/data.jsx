import { BsServer } from "react-icons/bs";
import { MdOutlineStorage } from "react-icons/md";
import { FaBuffer } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";

const alertsData = [
  {
    id: "1",
    title: "Server Down",
    description: "Main API server is not responding.",
    type: "Critical",
    timestamp: "2025-07-03T12:05:00Z",
    seen: false,
    icon: <BsServer />
  },
  {
    id: "2",
    title: "New User Signup",
    description: "A new user has registered from the EU region.",
    type: "Info",
    timestamp: "2025-07-03T10:10:00Z",
    seen: true,
    icon: <FaBuffer />
  },
  {
    id: "3",
    title: "High Memory Usage",
    description: "Memory usage on server exceeded 85%.",
    type: "Warning",
    timestamp: "2025-07-02T22:47:00Z",
    seen: false,
    icon: <MdOutlineStorage />
  },
  {
    id: "4",
    title: "Billing Issue Detected",
    description: "Failed payment attempt from user xyz@example.com.",
    type: "Critical",
    timestamp: "2025-07-02T21:30:00Z",
    seen: false,
    icon: <FaBroadcastTower />
  },
  {
    id: "5",
    title: "Weekly Report Ready",
    description: "Your performance report for last week is available.",
    type: "Info",
    timestamp: "2025-07-01T08:00:00Z",
    seen: true,
    icon: <TbReportAnalytics />
  },
  {
    id: "6",
    title: "Disk Space Low",
    description: "Disk usage has exceeded 90% on server-5.",
    type: "Warning",
    timestamp: "2025-07-03T11:00:00Z",
    seen: false,
    icon: <MdOutlineStorage />
  },
  {
    id: "7",
    title: "Service Restarted",
    description: "The payment service was restarted successfully.",
    type: "Info",
    timestamp: "2025-07-03T09:45:00Z",
    seen: true,
    icon: <FaBroadcastTower />
  },
  {
    id: "8",
    title: "Unauthorized Login Attempt",
    description: "Multiple failed logins detected from IP 192.168.5.22.",
    type: "Critical",
    timestamp: "2025-07-03T07:20:00Z",
    seen: false,
    icon: <BsServer />
  },
  {
    id: "9",
    title: "New Report Generated",
    description: "Your daily analytics report is now ready.",
    type: "Info",
    timestamp: "2025-07-02T20:00:00Z",
    seen: true,
    icon: <TbReportAnalytics />
  },
  {
    id: "10",
    title: "Storage Bucket Synced",
    description: "New files successfully synced to S3 backup bucket.",
    type: "Info",
    timestamp: "2025-07-02T17:30:00Z",
    seen: true,
    icon: <FaBuffer />
  },
  {
    id: "11",
    title: "System Reboot Required",
    description: "System patch installed. Reboot recommended.",
    type: "Warning",
    timestamp: "2025-07-02T16:10:00Z",
    seen: false,
    icon: <MdOutlineStorage />
  },
  {
    id: "12",
    title: "Database Backup Complete",
    description: "The backup for db-prod completed successfully.",
    type: "Info",
    timestamp: "2025-07-02T14:00:00Z",
    seen: true,
    icon: <TbReportAnalytics />
  },
  {
    id: "13",
    title: "Rate Limit Exceeded",
    description: "Client ID 7812 exceeded the hourly request limit.",
    type: "Warning",
    timestamp: "2025-07-02T12:55:00Z",
    seen: false,
    icon: <BsServer />
  },
  {
    id: "14",
    title: "Service Health Restored",
    description: "All services are now running normally.",
    type: "Info",
    timestamp: "2025-07-02T10:00:00Z",
    seen: true,
    icon: <FaBroadcastTower />
  },
  {
    id: "15",
    title: "Critical Patch Available",
    description: "Security patch v5.2.1 released. Apply ASAP.",
    type: "Critical",
    timestamp: "2025-07-01T23:45:00Z",
    seen: false,
    icon: <BsServer />
  }
];

export default alertsData;

