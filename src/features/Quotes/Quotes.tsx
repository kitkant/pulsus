import { QuotesAPI } from '@/api/QuotesData'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Quotes = () => {
	const [quotes, setQuotes] = useState({ quote: '', author: '' })

	useEffect(() => {
		QuotesAPI.getQuotes()
			.then((data): any => {
				setQuotes({ quote: data.data[0].quote, author: data.data[0].author })
			})
			.catch((error): any => {
				// console.log(error)
			})
	}, [])

	return (
		<div className='flex flex-col max-w-[70%] gap-[10px] items-center text-center'>
			<Quo className='text-xl'>{quotes.quote}</Quo>
			<Autor className='text-[#ffffffcc] text-lg'>{quotes.author}</Autor>
		</div>
	)
}
const Quo = styled.span`
	@media (max-width: 1440px) {
		font-size: 18px;
	}
`
const Autor = styled.span`
	@media (max-width: 1440px) {
		font-size: 16px;
	}
`
export default Quotes
