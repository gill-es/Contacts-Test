import { DateTime } from "luxon";

const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat("MM-dd-yyyy");
};

export default {
  formatDate,
};
