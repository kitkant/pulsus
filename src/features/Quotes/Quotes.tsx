import { QuotesAPI } from '@/api/QuotesData'
import React, { useEffect, useState } from 'react'

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
			<span className='text-xl'>{quotes.quote}</span>
			<span className='text-[#ffffffcc] text-lg'>{quotes.author}</span>
		</div>
	)
}

export default Quotes
