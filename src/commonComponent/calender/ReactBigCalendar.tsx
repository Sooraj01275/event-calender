'use client';

import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEventContext } from "@/pages/EventContext";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const { events } = useEventContext();

  return (
    <div style={{ height: "calc(100vh - 100px)" }}>
      <Calendar
        views={["day", "week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events} // These are dynamically expanded using `getRecurringEvents`
      />
    </div>
  );
}
