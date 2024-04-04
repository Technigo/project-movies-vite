import React from 'react'
import { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/animation.json'

export const Loader = () => {
	const [isLoading, setIsLoading] = useState(false)

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<div>
			<Lottie options={defaultOptions} height={400} width={400} />
		</div>
	)
}

//nedan är försök att få animationen att visas längre.

// useEffect(() => {
// 	export const DelayLottie = setTimeout(() => {
// 		setLoading(true)
// 	}, 3000)
// })
