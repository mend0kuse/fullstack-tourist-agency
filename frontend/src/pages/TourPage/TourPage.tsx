import cn from 'classnames';
import { FC, useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { UserContext } from '../../context/UserContext';
import { orderApi } from '../../services/orderApi';
import { tourApi } from '../../services/toursApi';
import { Button } from '../../shared/ui/Button/Button';
import styles from './TourPage.module.scss'

interface TourPageProps { className?: string }

export const TourPage: FC<TourPageProps> = (props) => {
	const { className } = props;

	const queryClient = useQueryClient()

	const { user } = useContext(UserContext)

	const params = useParams<{ id: string }>()
	const { data } = useQuery('tour', () => tourApi.getTour(params.id))

	const createOrder = useMutation(orderApi.createOrder, {
		onSuccess: (res) => {
			queryClient.invalidateQueries('orders')
			alert('Успешно')
		},
		onError: () => alert('Что-то пошло не так')
	})

	return (
		<Layout>
			<div className={cn(styles.TourPage)}>
				<p>{data?.title}</p>
				<img src={data?.mainImg} alt="" />
				<Button
					onClick={() => user ? createOrder.mutate({
						userId: user?._id,
						price: data?.price,
						seats: 1,
						tourId: params.id,
					})
						: alert('Авторизуйтесь')
					}
				>
					Записаться
				</Button>
			</div>
		</Layout>
	);
};