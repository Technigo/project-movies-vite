import '../styling/SecondPage.css'
import { useState, useEffect } from 'react'
import { Loader } from './Loader'
import {NotFound} from './NotFound'
import {Link, useParams} from 'react-router-dom'
import { DetailList } from './DetailList'

export const Details = () => {
	const [detailData, setDetailData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const params = useParams()
	const movieId = params.slug
	const API_KEY = '23ace2b0c27910f5cec13f5bdb014044'

	const listUrl =
	`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

	useEffect(() => {
		fetch(listUrl)
			.then((result) => result.json())
			.then((json) => {
				setDetailData(json)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [listUrl])

	if (!detailData || detailData === undefined) {
		return <Loader />
	}

	if (detailData.success === false) {
		return <NotFound />
	}
	console.log('detailtdata secondpage', detailData)
	return (
		<>
			{isLoading && <Loader />}
			<DetailList detailData={detailData} />
		</>
	)
}