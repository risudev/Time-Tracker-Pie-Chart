import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {
    onAdd: (activity: string, hours: number, color: string) => void
}

const TimeForm = ({ onAdd }: Props) => {

    const [activity, setActivity] = useState("");
    const [hours, setHours] = useState("");
    const [color, setColor] = useState("#36A2EB")

    const handleSubmit = () => {
        if (!activity.trim() || !hours) {
            alert('please fill in all fields.');
            return;
        }

        const parsedHours = Number(hours);
        if (isNaN(parsedHours) || parsedHours <= 0) {
            alert('Enter a valid number of hours.');
            return;
        }


        onAdd(activity,parsedHours,color)
        setActivity("");
        setHours("");
        setColor('#36A2EB');
    }
    return (
        <div className='space-y-3'>
            <Input
                placeholder='Activity {e.g sleep}'
                value={activity}
                onChange={(e) => setActivity(e.target.value)} />

            <Input
                type='number'
                placeholder='Hours {e.g 8}'
                value={hours}
                onChange={(e) => setHours(e.target.value)} />
            
            <label htmlFor="colorPicker" className="text-sm font-medium">
                Pick a color 🎨:
            </label>

            <Input
                id='colorPicker'
                type='color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <Button className='w-full' onClick={handleSubmit}>
                Add Activity
            </Button>
        </div>
    )
}

export default TimeForm
