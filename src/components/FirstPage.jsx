import React from "react"
import '../styling/FirstPage.css'
import { PopularList } from "./PopularList"
import { DelayLottie } from "./Loader"

export const Movies = () => {
  return (
		<>
		<DelayLottie />
		<PopularList />
		</>
	)
}