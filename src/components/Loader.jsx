import Lottie from "react-lottie"
import animationData from "../lotties/animation.json"

export const Loader = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	}

	return (
		<div>
			<Lottie options={defaultOptions} height={300} width={300} />
		</div>
	)
}

//nedan är försök att få animationen att visas längre.

// useEffect(() => {
// 	export const DelayLottie = setTimeout(() => {
// 		setLoading(true)
// 	}, 3000)
// })
