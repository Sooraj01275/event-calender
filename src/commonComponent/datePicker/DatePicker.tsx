import { TextField } from '@mui/material'
interface DatePickerProps {
    elementId: string
    handleChange: (value: string) => void
}

export default function DatePicker({ elementId, handleChange }: DatePickerProps) {
    return (
        <TextField id={elementId} type='date' size='small' onChange={(e) => handleChange(e.target.value)} />
    )
}