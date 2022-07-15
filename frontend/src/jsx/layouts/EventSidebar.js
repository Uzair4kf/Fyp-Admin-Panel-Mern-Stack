import React, { useState, useEffect } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
/// Scrol
import PerfectScrollbar from "react-perfect-scrollbar";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import axios from "axios";

const EventSidebar = ({ activeEvent }) => {
  const [date, setDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState("");

  const [largeModal, setLargeModal] = useState(false);
  const [eventName, setEventName] = useState();
  const [eventdesc, setEventDesc] = useState();
  const [hasEvent, setHasEvent] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [cal, setCal] = useState();
  // const fulldate = date.getDate().concat(date.getMonth() + 1);

  useEffect(() => {
    const fetchcalendarEvents = async () => {
      const { data } = await axios.get("/ecom-calendar");

      setCalendarEvents(data);
    };
    fetchcalendarEvents();
  }, []);

  const createCalendarEvent = async () => {
    const res = await axios.post(`/ecom-calendar`, {
      name: eventName,
      description: eventdesc,
      eventDate: date.toLocaleDateString(),
    });
  };

  return (
    <PerfectScrollbar
      className={`event-sidebar dz-scroll ${activeEvent ? "active" : ""}`}
      id="eventSidebar"
    >
      <div className="card rounded-0 mb-0 h-auto bg-transparent shadow-none   ">
        <div className="card-body event-calender pb-2 text-center col-xl-6 col-sm-6">
          <Calendar
            className="col-xl-12 col-sm-6"
            onClickDay={(date) => {
              setLargeModal(true);
              setDate(date);
              console.log("date :", date);

              calendarEvents.map((event) => {
                if (date.toLocaleDateString() == event.eventDate) {
                  const eventname = event.name;
                  setEventName(eventname);
                  console.log("eventname :", event.name);
                }
              });

              console.log(" dateLocal", date.toLocaleDateString());

              // if (cal) {
              //   setEventName(cal.eventname);
              //   setEventDesc(cal.description);
              // }
            }}
            value={date}
          />
        </div>
        <div className="col-xl-12 col-sm-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="mb-0">Booked Room Today</h4>
            </div>
            <div className="card-body">
              <div className="progress mb-4" style={{ height: "13px" }}>
                <div
                  className="progress-bar gradient-5 progress-animated"
                  style={{ width: "95%", height: "13px" }}
                >
                  <span className="sr-only">15% Complete</span>
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "13px" }}>
                <div
                  className="progress-bar gradient-6 progress-animated"
                  style={{ width: "55%", height: "13px" }}
                >
                  <span className="sr-only">45% Complete</span>
                </div>
              </div>
              <div
                className="progress default-progress"
                style={{ height: "13px" }}
              >
                <div
                  className="progress-bar gradient-7 progress-animated"
                  style={{ width: "55%", height: "13px" }}
                >
                  <span className="sr-only">45% Complete</span>
                </div>
              </div>
              <div className="d-flex mt-4 progress-bar-legend align-items-center justify-content-between">
                <div className="d-flex">
                  <span className="marker gradient-5"></span>
                  <div>
                    <p className="status">Pending</p>
                    <span className="result">234</span>
                  </div>
                </div>
                <div className="d-flex">
                  <span className="marker gradient-6"></span>
                  <div>
                    <p className="status">Done</p>
                    <span className="result">65</span>
                  </div>
                </div>
                <div className="d-flex">
                  <span className="marker gradient-7"></span>
                  <div>
                    <p className="status">Finish</p>
                    <span className="result">763</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(formatDate)}

      <Modal className="fade bd-example-modal-lg" show={largeModal} size="lg">
        <Modal.Header>
          <Modal.Title>Calendar Event</Modal.Title>

          <Button
            variant=""
            className="btn-close"
            onClick={() => {
              setLargeModal(false);
            }}
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <Col xl="6">
            <div class="card-body">
              <div class="basic-form">
                <form>
                  <div class="form-group mb-3">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Event Name"
                      onChange={(e) => {
                        setEventName(e.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div class="card-body">
              <div class="basic-form">
                <form>
                  <div class="form-group mb-3">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Event description"
                      onChange={(e) => {
                        setEventDesc(e.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div class="card-body">
              <div class="basic-form">
                <form>
                  <div class="form-group mb-3">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      value={date?.toString()}
                    />
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger light" onClick={() => setLargeModal(false)}>
            Close
          </Button>
          <Button
            variant="primary light"
            type="button"
            className="btn btn-primary"
            onClick={createCalendarEvent}
          >
            Save Event
          </Button>
          {hasEvent && (
            <Button className="me-2" variant="warning light">
              Update Event
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </PerfectScrollbar>
  );
};

export default EventSidebar;
