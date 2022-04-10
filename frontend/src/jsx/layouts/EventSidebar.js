import React, { useState } from "react";

/// Scrol
import PerfectScrollbar from "react-perfect-scrollbar";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

const EventSidebar = ({ activeEvent }) => {
  const [value, onChange] = useState(new Date());

  return (
    <PerfectScrollbar
      className={`event-sidebar dz-scroll ${activeEvent ? "active" : ""}`}
      id="eventSidebar"
    >
      <div className="card rounded-0 mb-0 h-auto bg-transparent shadow-none">
        <div className="card-body event-calender pb-2 text-center">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </PerfectScrollbar>
  );
};

export default EventSidebar;
