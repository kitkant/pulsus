import React, { useState } from 'react'

const DateNow = () => {
	const now = new Date()
	const options = { weekday: 'long', month: 'long', day: 'numeric' }
	const [date, setDate] = useState(now.toLocaleDateString('en-US', options))

	setInterval(() => {
		const now = new Date()
		if (
			now.getHours() === 0 &&
			date !== now.toLocaleDateString('en-US', options)
		)
			setDate(now.toLocaleDateString('en-US', options))
	}, 1000)

	return <span className='text-2xl'>{date}</span>
}

export default DateNow
