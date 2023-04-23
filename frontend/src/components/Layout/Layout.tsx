import cn from 'classnames';
import { FC } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
	const { children } = props
	return (
		<div className={cn(styles.Layout)}>
			<Header />
			<div className={styles.page}>
				{children}
			</div>
			<Footer />
		</div>
	);
};