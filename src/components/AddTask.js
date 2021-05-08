import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, time, reminder })

        setText('')
        setDay('')
        setTime('')
        setReminder(false)
    }

    return (
        <form className='add-form'
        onSubmit = {onSubmit}>
            <div className= 'form-control'>
                <label>Enter Task</label>
                <input type='text' 
                placeholder='Add Task'
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className= 'form-control'>
                <label>Enter Day</label>
                <input type = 'date'
                value={day} 
                onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className= 'form-control'>
                <label>Enter Time</label>
                <input type = 'time'
                value={time} 
                onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className= 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='radio' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className='btn btn-block' 
            type='submit' 
            value='Save Task' />
            
        </form>
    )
}

export default AddTask
