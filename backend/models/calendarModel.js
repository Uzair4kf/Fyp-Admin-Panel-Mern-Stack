import mongoose from "mongoose";

const calendarSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    Eventdate: {
      type: String,
      required: false,
    },
  },
  {
    collection: "calendar",
  }
);

const Calendar = mongoose.model("Calendar", calendarSchema);

export default Calendar;
