import DatePicker from "@/commonComponent/datePicker/DatePicker"
import { Add } from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormHelperText, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useEventContext } from "../EventContext"

export const EventManagemet = () => {
    const [isAddEvent, setIsAddEvent] = useState<boolean>(false)
    const [eventName, setEventName] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [recurrenceFrequency, setRecurrenceFrequency] = useState<"Daily" | "Weekly" | "Monthly" | "Yearly">("Daily");

    const { events, addEvent } = useEventContext();

    const handleAddRecurringEvent = () => {
        if (!eventName || !startDate || !endDate) return;

        const newEvent = {
            id: Math.random(),
            title: eventName,
            allDay: true,
            start: new Date(startDate),
            end: new Date(startDate),
            recurrence: {
                frequency: recurrenceFrequency,
                endDate: new Date(endDate),
            },
        };

        addEvent(newEvent as any);
        setIsModalOpen(false);
        setEventName("");
        setStartDate("");
        setEndDate("");
    };
    return (
        <Box>
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <DialogTitle>Add Recurring Event</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Event Name"
                        fullWidth
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        margin="normal"
                    />
                    <Box display={'flex'} gap={2}>
                        <DatePicker elementId="from" handleChange={setStartDate} />
                        <DatePicker elementId="to" handleChange={setEndDate} />
                    </Box>
                    <InputLabel>Recurrence Frequency</InputLabel>
                    <RadioGroup name="category" onChange={(e) => setRecurrenceFrequency(e.target.value as any)} >
                        <FormControlLabel sx={{ margin: 0 }} value="Daily" control={<Radio />} label={<Typography>Daily </Typography>} />
                        <FormControlLabel sx={{ margin: 0 }} value="Weekly" control={<Radio />} label={<Typography>Weekly </Typography>} />
                        <FormControlLabel sx={{ margin: 0 }} value="Monthly" control={<Radio />} label={<Typography>Monthly </Typography>} />
                        <FormControlLabel sx={{ margin: 0 }} value="Yearly" control={<Radio />} label={<Typography>Yearly </Typography>} />
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsModalOpen(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddRecurringEvent} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
            <Box gap={2} pb={2}>
                <Typography textAlign={'center'} variant="h4">Event Calender</Typography>
                <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    <Button variant='contained' onClick={() => setIsModalOpen(true)} startIcon={<Add />}>
                        Add Event
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}