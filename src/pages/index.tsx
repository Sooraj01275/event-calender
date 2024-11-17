import DatePicker from "@/commonComponent/datePicker/DatePicker";
import ReactBigCalendar from "@/commonComponent/calender/ReactBigCalendar";
import { NavigationTabs } from "@/commonComponent/Tabs";
import { Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useContext, useState } from "react";
import { EventManagemet } from "./eventManagement/EventMangement";
import { useEventContext } from "./EventContext";

export default function Home() {

  return (
    <div>
      <EventManagemet />
      <ReactBigCalendar />
    </div>
  );
}
