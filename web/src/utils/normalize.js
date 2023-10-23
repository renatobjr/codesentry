const normalize = {
  formatTags: (tag) => {
    return tag.split("-").join(" ");
  },
  setPriorityIcons: (priority) => {
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
  setWorkingDays: (createdAt, updatedAt) => {
    const created = new Date(createdAt);
    const updated = new Date(updatedAt);

    const diffTime = Math.abs(updated - created);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  },
  setAvatar: (username) => {
    try {
      const name = username.split(" ");
      const initials = name[0].charAt(0) + name[1].charAt(0);

      return initials;
    } catch (error) {
      return 'CS'
    }

  },
  setItemsPerPage: 10
};

export default normalize;
