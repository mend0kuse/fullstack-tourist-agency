import { FC } from 'react';
import cn from 'classnames';
import styles from './About.module.scss'
import { Layout } from '../../components/Layout/Layout';

interface AboutProps { }

export const About: FC<AboutProps> = () => {
	return (
		<Layout>
			<div className={cn(styles.About)}>
				О нас
			</div>
		</Layout>
	);
};