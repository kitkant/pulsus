import React, { useState } from 'react'
import styled from '@emotion/styled'

const DateNow = () => {
	const now = new Date()
	const [date, setDate] = useState(
		now.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
		})
	)

	setInterval(() => {
		const now = new Date()
		if (
			now.getHours() === 0 &&
			date !==
				now.toLocaleDateString('en-US', {
					weekday: 'long',
					month: 'long',
					day: 'numeric',
				})
		)
			setDate(
				now.toLocaleDateString('en-US', {
					weekday: 'long',
					month: 'long',
					day: 'numeric',
				})
			)
	}, 1000)

	return <Span className='text-4xl'>{date}</Span>
}

const Span = styled.span`
	@media (max-width: 1440px) {
		font-size: 32px;
	}
`

export default DateNow
