import { A11y, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useChangeList from './hook/useChangeList'
import Layout from '@/layout/Layout'

const Carousel = () => {
	const [bgNum, _] = useState(Math.floor(Math.random() * (20 - 1 + 1)) + 1)
	const { finallyList } = useChangeList()

	setInterval(() => {
		const now = new Date()
		const hours = now.getHours()
	}, 1000)

	return (
		<div className='h-screen relative z-[1]'>
			<Swiper
				className='h-full'
				modules={[Navigation, A11y, EffectFade]}
				effect='fade'
				slidesPerView={1}
				navigation
				loop={true}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<Layout />
				{finallyList(bgNum).map((img: any) => {
					return (
						<>
							<SwiperSlide key={img}>
								<Image
									alt='slide'
									className='select-none'
									quality={100}
									fill
									sizes='100vw'
									src={`/images/afternoon/${img}.webp`}
									style={{ objectFit: 'cover' }}
								/>
							</SwiperSlide>
						</>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Carousel
