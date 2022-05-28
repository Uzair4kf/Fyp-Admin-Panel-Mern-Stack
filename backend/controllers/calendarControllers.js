import Calendar from "../models/calendarModel.js";
const getcalendarEvent = async (req, res) => {
  const calendarEvents = await Calendar.find({});

  res.json(calendarEvents);
};
const createcalendarEvent = async (req, res) => {
  const { name, description, eventDate } = req.body;

  console.log(req.body);
  const calendarEvent = new Calendar({
    name: name,

    eventDate: eventDate,

    description: description,
  });
  const createdCalendarEvent = await calendarEvent.save();

  console.log(createdCalendarEvent);
  res.status(201).json(createdCalendarEvent);
};

const deleteCalendarEvent = async (req, res) => {
  const calendarEvent = await Calendar.findById(req.params.id);
  if (calendarEvent) {
    await calendarEvent.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
export { getcalendarEvent, createcalendarEvent, deleteCalendarEvent };
