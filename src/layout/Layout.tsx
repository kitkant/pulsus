import ButtonSound from '@/features/ButtonSound/ButtonSound'
import DateNow from '@/features/DateNow/DateNow'
import Timer from '@/features/Timer/Timer'
import Weather from '@/features/Weather/Weather'
import styled from '@emotion/styled'

const Layout = () => {
	console.log('render layout')
	return (
		<Wrapper className='absolute top-0 w-full h-full layout flex-col flex justify-between'>
			<FlexHeader className='w-full flex'>
				<Weather />
			</FlexHeader>
			<FlexMiddle className='flex flex-col'>
				<Timer />
				<DateNow />
			</FlexMiddle>
			<FlexBottom className='w-full flex'>
				<ButtonSound />
			</FlexBottom>
		</Wrapper>
	)
}

const FlexHeader = styled.div`
	justify-content: end;
`
const Wrapper = styled.div`
	padding: 1rem;
`
const FlexMiddle = styled.div`
	align-items: center;
`
const FlexBottom = styled.div`
	justify-content: end;
`
export default Layout
