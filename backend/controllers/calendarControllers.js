import Subcategory from "../models/subcategoryModel.js";
const getcalendarEvent = async (req, res) => {
  const calendarEvents = await Calendar.find({});

  res.json(calendarEvents);
};
const createcalendarEvent = async (req, res) => {
  const calendarEvent = new Calendar({
    name: "Sample name",

    eventDate: "",

    description: "Sample description",
    parentId: "",
  });
  const createdCalendarEvent = await calendarEvent.save();

  res.status(201).json(createdCalendarEvent);
};
export { getcalendarEvent, createcalendarEvent };
