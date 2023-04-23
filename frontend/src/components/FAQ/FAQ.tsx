import { FC } from 'react';
import cn from 'classnames';
import styles from './FAQ.module.scss'
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import { ToggleTextBlock } from '../ToggleTextBlock/ToggleTextBlock';

interface FAQProps {
	className?: string
}

export const FAQ: FC<FAQProps> = (props) => {
	const { className } = props
	return (
		<div className={cn(styles.FAQ, className)}>
			<SectionTitle text='Ответы на часто задаваемые вопросы' />
			<ToggleTextBlock text='Что входит / не входит в стоимость тура?' title='Что входит / не входит в стоимость тура?' />
			<ToggleTextBlock text='Что нужно брать с собой в тур?' title='Что нужно брать с собой в тур?' />
			<ToggleTextBlock text='Нужно ли сдавать тест на COVID 19?' title='Нужно ли сдавать тест на COVID 19?' />
			<ToggleTextBlock text='Нужна ли физичесая подготовка к туру?' title='Нужна ли физичесая подготовка к туру?' />
		</div>
	);
};