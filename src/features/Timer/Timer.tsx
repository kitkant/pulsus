import React, { useState } from 'react'
import styled from '@emotion/styled'

const Timer = () => {
	const [formatted, setFormatted] = useState('')

	setInterval(() => {
		const now = new Date()
		const hours = now.getHours()
		const minutes = now.getMinutes()
		const seconds = now.getSeconds()

		setFormatted(
			[
				hours.toString().padStart(2, '0'),
				minutes.toString().padStart(2, '0'),
				seconds.toString().padStart(2, '0'),
			].join(':')
		)
	}, 1000)

	return <Clock>{formatted}</Clock>
}

const Clock = styled.time`
	cursor: default;
	font-size: 1000%;
	letter-spacing: -5px;
	line-height: normal;
`

export default Timer
