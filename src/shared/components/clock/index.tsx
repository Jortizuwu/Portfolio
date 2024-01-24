import { useState, useEffect } from 'react'

const months: Record<string, string> = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec'
}

function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const dateObject = new Date()
      const month = dateObject.getMonth()
      const day = dateObject.getDate()
      const hour = dateObject.getHours()
      const minute = dateObject.getMinutes()

      const currentTime = `${
        months[String(month)]
      } ${day} - ${hour}:${minute}`

      setTime(currentTime)
    }
    updateClock()
    const intervalId = setInterval(updateClock, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return <span className='text-sm font-bold'>{time}</span>
}

export default Clock
