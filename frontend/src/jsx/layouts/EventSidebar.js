import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
/// Scrol
import PerfectScrollbar from "react-perfect-scrollbar";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

const EventSidebar = ({ activeEvent }) => {
  const [date, setDate] = useState(new Date());
  const [largeModal, setLargeModal] = useState(false);
  const [eventName, setEventName] = useState();
  const [eventdesc, setEventDesc] = useState();

  return (
    <PerfectScrollbar
      className={`event-sidebar dz-scroll ${activeEvent ? "active" : ""}`}
      id="eventSidebar"
    >
      <div className="card rounded-0 mb-0 h-auto bg-transparent shadow-none">
        <div className="card-body event-calender pb-2 text-center">
          <Calendar
            onClickDay={(date) => {
              setLargeModal(true);
              setDate(date);
            }}
            value={date}
          />
        </div>
      </div>

      <Modal className="fade bd-example-modal-lg" show={largeModal} size="lg">
        <Modal.Header>
          <Modal.Title>Calendar Event</Modal.Title>

          <Button
            variant=""
            className="btn-close"
            onClick={() => setLargeModal(false)}
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
                      value={date.toString()}
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
          <Button variant="" type="button" className="btn btn-primary">
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </PerfectScrollbar>
  );
};

export default EventSidebar;
