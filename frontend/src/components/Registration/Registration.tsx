import cn from 'classnames';
import styles from './Registration.module.scss'
import { FC, useState } from 'react';
import { authApi } from '../../services/authApi';
import {
	useMutation,
	useQueryClient
} from 'react-query'
import { Input } from '../../shared/ui/Input/Input';

interface RegistrationProps {
	setLogin: () => void
}

export const Registration: FC<RegistrationProps> = (props) => {
	const { setLogin } = props

	const [fullName, setFullName] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [passport, setPassport] = useState('')
	const [age, setAge] = useState('')
	const [city, setCity] = useState('')
	const [mail, setMail] = useState('')
	const [phone, setPhone] = useState('')

	const mutation = useMutation(authApi.registration, {
		onSuccess: setLogin,
		onError: () => alert('Что-то пошло не так')
	})

	return (
		<div className={cn(styles.wrapper)}>
			<Input placeholder='Логин' value={fullName} onChange={setFullName} />
			<Input placeholder='Пароль' value={password} onChange={setPassword} />

			<Input placeholder='Ник' value={username} onChange={setUsername} />
			<Input placeholder='Паспорт' value={passport} onChange={setPassport} />

			<Input placeholder='Возраст' value={age} onChange={setAge} />
			<Input placeholder='Город' value={city} onChange={setCity} />

			<Input placeholder='Почта' value={mail} onChange={setMail} />
			<Input placeholder='Телефон' value={phone} onChange={setPhone} />

			<button
				onClick={() => {
					mutation.mutate({
						fullName,
						password,
						username,
						passport,
						age,
						city,
						mail,
						phone
					})
				}}
			>
				Регистрация
			</button>

			<button onClick={setLogin}>Вход</button>
		</div>
	);
};