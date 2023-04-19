import cn from 'classnames';
import { FC, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { tourApi } from '../../services/toursApi';
import { Input } from '../../shared/ui/Input/Input';
import styles from './TourForm.module.scss'

interface TourFormProps { }

export const TourForm: FC<TourFormProps> = (props) => {
	const [title, setTitle] = useState('')
	const [duration, setDuration] = useState('')
	const [place, setPlace] = useState('')
	const [places, setPlaces] = useState<string[]>([])
	const [price, setPrice] = useState('')
	const [seats, setSeats] = useState('')
	const [member, setMember] = useState('')
	const [team, setTeam] = useState<string[]>([])
	const [dayDesc, setDayDesc] = useState('')
	const [days, setDays] = useState<string[]>([])

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

	const queryClient = useQueryClient()

	const mutation = useMutation(tourApi.createTour, {
		onSuccess: (res) => queryClient.invalidateQueries('tours'),
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

			<button onClick={() => {
				mutation.mutate({
					title: title,
					allSeats: seats,
					desc: days,
					places,
					price,
					duration,
					team,
				})
			}}>Создать тур</button>
		</div>
	);
};