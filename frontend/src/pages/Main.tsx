import { FC, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";
import { TourForm } from "../components/TourForm/TourForm";
import { UserContext } from "../context/UserContext";
import { orderApi } from "../services/orderApi";
import { tourApi } from "../services/toursApi";
import { Modal } from "../shared/ui/Modal/Modal";

export const Main: FC = () => {
	const [open, setOpen] = useState(false)
	const [openTour, setOpenTour] = useState(false)
	const [isLogin, setIslogin] = useState(true)


	const { user } = useContext(UserContext)

	const queryClient = useQueryClient()
	const { data } = useQuery('tours', tourApi.getTours)
	const { data: orders } = useQuery('orders', orderApi.getOrders)


	const mutation = useMutation(orderApi.createOrder, {
		onSuccess: (res) => queryClient.invalidateQueries('orders'),
		onError: () => alert('Что-то пошло не так')
	})

	const closeHandler = () => {
		setOpen(false)
	}

	const closeHandlerTour = () => {
		setOpenTour(false)
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
			<button onClick={() => setOpenTour(true)}>Создать тур</button>
			<p>ТУры</p>
			{data?.length && data.map(i => (
				<>
					<p>{i.title}</p>
					<button onClick={() => {
						mutation.mutate({
							price: i.price,
							seats: 1,
							tourId: i._id,
							userId: user?._id
						})
					}}>Оставить заявку</button>
				</>
			))}
			<p>Заявки</p>
			{orders?.length && orders.map((i) => (
				<>
					{i.virtualUser && <p>{i.virtualUser[0].username}</p>}
				</>
			))}
			<Modal open={open} onClose={closeHandler}>
				{isLogin ? <Login onLogin={closeHandler} setReg={setReg} /> : <Registration setLogin={setLogin} />}
			</Modal>

			<Modal open={openTour} onClose={closeHandlerTour}>
				<TourForm />
			</Modal>
		</div>
	);
};