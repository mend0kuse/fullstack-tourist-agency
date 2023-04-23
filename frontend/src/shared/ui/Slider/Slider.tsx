import Swiper, { SwiperOptions } from 'swiper';
import { register } from 'swiper/element/bundle';

import { FC, ReactNode, useEffect, useRef } from 'react';

import { ReactComponent as ArrowSvg } from '../../assets/icons/arrow.svg';

import styles from './Slider.module.scss';

interface SliderProps extends JSX.SwiperContainerAttributes {
	slides?: ReactNode[];
	config?: SwiperOptions;
	withNav?: boolean;
}

register();

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

const Slider: FC<SliderProps> = (props) => {
	const { slides, config, withNav, ...otherProps } = props;

	const swiperElRef = useRef<SwiperRef>();
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (swiperElRef.current) {
			Object.assign(swiperElRef.current, config);

			if (withNav) {
				const conf: SwiperOptions = {
					navigation: {
						nextEl: nextRef.current,
						prevEl: prevRef.current,
					},
				};

				Object.assign(swiperElRef.current, conf);
			}

			swiperElRef.current.initialize();
		}
	}, []);

	return (
		<div className={styles.wrapper}>
			<swiper-container ref={swiperElRef} {...otherProps}>
				{slides?.map((slide, i) => (
					<swiper-slide key={i}>{slide}</swiper-slide>
				))}
			</swiper-container>
			{withNav && (
				<div className={styles.btns}>
					<button className={styles.prev} ref={prevRef}>
						<ArrowSvg />
					</button>
					<button className={styles.next} ref={nextRef}>
						<ArrowSvg />
					</button>
				</div>
			)}
		</div>
	);
};
export default Slider;
