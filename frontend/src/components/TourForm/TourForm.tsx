import cn from 'classnames';
import { FC, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { tourApi } from '../../services/toursApi';
import { Input } from '../../shared/ui/Input/Input';
import styles from './TourForm.module.scss'

interface TourFormProps { }

export const TourForm: FC<TourFormProps> = (props) => {
	const router = useNavigate()

	const [title, setTitle] = useState('')
	const [duration, setDuration] = useState('')
	const [price, setPrice] = useState('')
	const [seats, setSeats] = useState('')

	const [place, setPlace] = useState('')
	const [places, setPlaces] = useState<string[]>([])

	const [member, setMember] = useState('')
	const [team, setTeam] = useState<string[]>([])

	const [dayDesc, setDayDesc] = useState('')
	const [days, setDays] = useState<string[]>([])

	const [mainImg, setMainImg] = useState('')

	const [sliderImg, setSliderImg] = useState('')
	const [gallery, setGallery] = useState<string[]>([])

	const addPlace = () => {
		setPlaces([...places, place])
		setPlace('')
	}

	const addMember = () => {
		setTeam([...team, member])
		setMember('')
	}

	const addDay = () => {
		setDays([...days, dayDesc])
		setDayDesc('')
	}

	const addSliderImg = () => {
		setGallery([...gallery, sliderImg])
		setSliderImg('')
	}


	const queryClient = useQueryClient()

	const mutation = useMutation(tourApi.createTour, {
		onSuccess: (res) => {
			queryClient.invalidateQueries('tours')
			res._id && router(res._id)
		},
		onError: () => alert('Что-то пошло не так')
	})

	return (
		<div className={cn(styles.TourForm)}>
			<Input placeholder='Название' value={title} onChange={setTitle} />
			<Input placeholder='Длительность' value={duration} onChange={setDuration} />

			<Input placeholder='Место' value={place} onChange={setPlace} />
			<button onClick={addPlace}>Добавить место</button>
			<p>Указанные места:</p>
			{places.map((i) => <p>{i}</p>)}

			<Input placeholder='Цена' value={price} onChange={setPrice} />
			<Input placeholder='Всего мест' value={seats} onChange={setSeats} />

			<Input placeholder='Член комады' value={member} onChange={setMember} />
			<button onClick={addMember}>Добавить в команду</button>
			<p>Команда на тур:</p>
			{team.map((i) => <p>{i}</p>)}

			<Input placeholder='Описание дня' value={dayDesc} onChange={setDayDesc} />
			<button onClick={addDay}>Добавить день</button>
			{days.map((i, ind) => <p>День номер {ind + 1} <br /> {i}</p>)}

			<Input placeholder='Ссылка на заставку' value={mainImg} onChange={setMainImg} />

			<Input placeholder='Ссылка на картинку в слайдер' value={sliderImg} onChange={setSliderImg} />
			<button onClick={addSliderImg}>Добавить картинку в слайдер</button>

			{gallery.map((i, ind) => <p>{i}</p>)}

			<button onClick={() => {
				mutation.mutate({
					title: title,
					allSeats: seats,
					desc: days,
					places,
					price,
					duration,
					team,
					mainImg,
					sliderImgs: gallery
				})
			}}>Создать тур</button>
		</div>
	);
};