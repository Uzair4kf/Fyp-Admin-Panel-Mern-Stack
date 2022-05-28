import express from "express";
import {
  getcalendarEvent,
  createcalendarEvent,
  deleteCalendarEvent,
} from "../controllers/calendarControllers.js";
const router = express.Router();
router
  .use(express.json())
  .route("/")
  .get(getcalendarEvent)
  .post(createcalendarEvent);
router.use(express.json()).route("/:id").delete(deleteCalendarEvent);
export default router;
