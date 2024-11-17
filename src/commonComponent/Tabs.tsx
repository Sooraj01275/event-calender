import { Tab, Tabs } from "@mui/material"

export const NavigationTabs = () => {
    return (
        <Tabs value={1} aria-label="basic tabs example">
            <Tab label="Event Mangaments" />
            <Tab label="Calender" />
        </Tabs>
    )
}