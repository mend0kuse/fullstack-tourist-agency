import cn from 'classnames';
import { FC } from 'react';
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
	className?: string
	text: string
	align?: SectionTitleAlign
}

export enum SectionTitleAlign {
	CENTER = 'center',
	LEFT = 'left'
}

export const SectionTitle: FC<SectionTitleProps> = (props) => {
	const { className, text, align = SectionTitleAlign.LEFT } = props
	return (
		<h2 className={cn(styles.SectionTitle, className, styles[align])}>
			{text}
		</h2>
	);
};