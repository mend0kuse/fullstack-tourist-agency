import cn from 'classnames';
import { FC } from 'react';

interface TeamCardProps {
	className?: string;
	img: string;
	name: string;
	job: string;
}

export const TeamCard: FC<TeamCardProps> = (props) => {
	const { img, job, name } = props;

	return (
		<div >
			<img src={img} alt={name} />
			<p>{name}</p>
			<p>{job}</p>
		</div>
	);
};