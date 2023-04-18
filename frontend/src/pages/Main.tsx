import { FC, useState } from "react";
import { useQuery } from "react-query";

import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";
import { authApi } from "../services/authApi";
import { Modal } from "../shared/ui/Modal/Modal";

export const Main: FC = () => {

	const [open, setOpen] = useState(false)
	const [isLogin, setIslogin] = useState(true)

	const closeHandler = () => {
		setOpen(false)
	}
	const setReg = () => {
		setIslogin(false)
	}
	const setLogin = () => {
		setIslogin(true)
	}

	return (
		<div>
			<button onClick={() => setOpen(true)}>Логин</button>
			<Modal open={open} onClose={closeHandler}>
				{isLogin ? <Login onLogin={closeHandler} setReg={setReg} /> : <Registration setLogin={setLogin} />}
			</Modal>
		</div>
	);
};