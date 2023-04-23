import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './Tours.module.scss'
import { Layout } from '../../components/Layout/Layout';
import { Modal } from '../../shared/ui/Modal/Modal';
import { TourForm } from '../../components/TourForm/TourForm';
import { Button } from '../../shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { tourApi } from '../../services/toursApi';

interface ToursProps { }

export const Tours: FC<ToursProps> = () => {
	const [openTour, setOpenTour] = useState(false)

	const closeHandlerTour = () => {
		setOpenTour(false)
	}

	const { data } = useQuery('tours', tourApi.getTours)

	return (
		<Layout>
			<>
				<div className={cn(styles.Tours)}>
					<Button onClick={() => setOpenTour(true)}>Создать тур</Button>
				</div>
				<Modal open={openTour} onClose={closeHandlerTour}>
					<TourForm />
				</Modal>
			</>

		</Layout>
	);
};