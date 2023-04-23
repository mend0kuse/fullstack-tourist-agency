import cn from 'classnames';
import { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { Layout } from '../../components/Layout/Layout';
import { UserContext } from '../../context/UserContext';
import { orderApi } from '../../services/orderApi';
import styles from './Profile.module.scss'

interface ProfileProps { className?: string }

export const Profile: FC<ProfileProps> = (props) => {
	const { className } = props;

	const { user } = useContext(UserContext)

	const { data: orders } = useQuery('orders', () => orderApi.getOrdersByUserId(user?._id))

	return (
		<Layout>
			<div className={cn(styles.Profile)}>
				<p>Ваши заявки:</p>
				{orders?.map((i) => (
					<>
						<p>Название тура =  {i.virtualTour && i.virtualTour[0].title}</p>
					</>
				))}
			</div>
		</Layout>

	);
};