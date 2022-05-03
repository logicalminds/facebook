import React from 'react';
import './SingleComponents.css';

export function InputForm(props) {
	return (
		<div className='relative'>
			{props.startIcon && <i className={`startIcon ${props.startIcon}`}></i>}
			<input
				type={props.viewPassword ? 'text' : `${props.type}`}
				className={`border w-full rounded-md ${props.className}
				${props.isbordered ? `inputForm` : `outline-none`}
				${props.userInputError ? 'border-red-500' : null}
				${
					props.startIcon
						? 'input-form-placeholder-center'
						: 'input-form-placeholder-left'
				}`}
				placeholder={`${props.placeholder}`}
				value={props.value}
				onChange={props.onChange}
				autoFocus={props.autoFocus}
				autoComplete={props.autoComplete}
				disabled={props.disabled}
			/>
			{props.userInputError && (
				<i className='fas fa-exclamation-triangle input-error-icon'></i>
			)}
			{props.endIcon && <i className={`endIcon ${props.endIcon}`}></i>}
			{props.viewPasswordIcon &&
				(props.viewPassword ? (
					<i
						className={`fas fa-eye-slash password-view-icon ${props.viewPasswordClass}`}
						onClick={props.onViewPasswordIconClick}></i>
				) : (
					<i
						className={`fas fa-eye password-view-icon ${props.viewPasswordClass}`}
						onClick={props.onViewPasswordIconClick}></i>
				))}
		</div>
	);
}

export function Button(props) {
	return (
		<>
			<button
				className={`rounded-md font-medium ${props.className}`}
				onClick={props.onClick}
				disabled={props.disabled}>
				{props.buttonName}
			</button>
		</>
	);
}
