import { IssuePriorityType } from "@/@types/issue";
import dataUser from "@/data/users";

const normalize = {
  formatTags: (tag: string) => {
    return tag.split("-").join(" ");
  },
  setPriorityIcons: (priority: IssuePriorityType) => {
    switch (priority) {
      case "low":
        return {
          icon: "mdi-chevron-down",
          color: "green-accent-4",
        };
      case "medium":
        return {
          icon: "mdi-minus",
          color: "light-blue-accent-3",
        };
      case "high":
        return {
          icon: "mdi-chevron-up",
          color: "orange-darken-4",
        };
      case "urgent":
        return {
          icon: "mdi-chevron-double-up",
          color: "deep-orange-accent-4",
        };
      default:
        return {
          icon: "mdi-chevron-down",
          color: "green-darken-4",
        };
    }
  },
  setWorkingDays: (createdAt: string, updatedAt: string) => {
    const created = new Date(createdAt);
    const updated = new Date(updatedAt);

    const diffTime = Math.abs(+updated - +created);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  },
  setAvatar: (username: string) => {
    try {
      const name = username.split(" ");
      const initials = name[0].charAt(0) + name[1].charAt(0);

      return initials;
    } catch (error) {
      return "CS";
    }
  },
  setUserStatus: (status: string) => {
    switch (status) {
      case dataUser.status.WAITING_REGISTER:
        return "#6fa2e5";
      case dataUser.status.WAITING_APPROVAL:
        return "#5cb85c";
      case dataUser.status.APPROVED:
        return "#4cae4c";
      case dataUser.status.PENDING:
        return "#ffd700";
      case dataUser.status.ACTIVE:
        return "#337ab7";
      default:
        return "#808080";
    }
  },
  formatDate: (date: any) => {
    if (date != null) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const day = ("0" + d.getDate()).slice(-2);
      const hours = ("0" + d.getHours()).slice(-2);
      const minutes = ("0" + d.getMinutes()).slice(-2);
      return `${day}/${month}/${year} at ${hours}:${minutes}`;
    }
    return "User not log in yet";
  },
  formatFileSize: (size: number, decimals = 2) => {
    if (size === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  },
  setItemsPerPage: 10,
};

export default normalize;
