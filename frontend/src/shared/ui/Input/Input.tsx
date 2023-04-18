import cn from 'classnames';

import { type FC, type InputHTMLAttributes, memo, useState } from 'react';

import styles from './Input.module.scss';

type HtmlInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HtmlInput {
	value?: string | number;
	onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
	const { value, readOnly, className, type = 'text', onChange, ...otherProps } = props;

	return (
		<input
			className={cn(styles.Input, {}, className)}
			type={type}
			value={value}
			readOnly={readOnly}
			onChange={(e) => {
				onChange?.(e.target.value);
			}}
			{...otherProps}
		/>
	);
});

Input.displayName = 'Input';