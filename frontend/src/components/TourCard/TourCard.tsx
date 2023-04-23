import cn from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tour } from '../../types/Tour';
import styles from './TourCard.module.scss'

interface TourCardProps { className?: string, item: Tour }

export const TourCard: FC<TourCardProps> = (props) => {
	const { item } = props;

	const router = useNavigate()

	const redirectHandler = () => {
		item._id && router('/tours/' + item._id)
	}

	return (
		<div onClick={redirectHandler} className={cn(styles.TourCard)}>
			<img src={item.mainImg} className={styles.img} alt={item.title} />
			<p className={styles.title}>{item.title}</p>
		</div>
	);
};