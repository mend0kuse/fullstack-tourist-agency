import cn from 'classnames';
import { FC, useContext, useState } from 'react';
import { User } from '../../types/User'
import styles from './Login.module.scss'
import {
	useMutation
} from 'react-query'
import { authApi } from '../../services/authApi';
import { Input } from '../../shared/ui/Input/Input';
import { UserContext } from '../../context/UserContext';

interface LoginProps {
	setReg: () => void
	onLogin: () => void
}

export const Login: FC<LoginProps> = (props) => {
	const { setReg, onLogin } = props

	const { setUser, user } = useContext(UserContext)

	console.log(user);

	const mutation = useMutation(authApi.login, {
		onSuccess: (res) => { setUser?.(res as User); onLogin() },
		onError: () => alert('Что-то пошло не так')
	})

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className={cn(styles.wrapper)}>
			<p>Вход</p>
			<Input placeholder='Логин' value={username} onChange={setUsername} />
			<Input type="password" placeholder='Пароль' value={password} onChange={setPassword} />
			<button
				onClick={() => {
					mutation.mutate({
						username,
						password,
					})
				}}
			>
				Войти
			</button>
			<button onClick={setReg}>Нет аккаунта?</button>
		</div>
	);
};