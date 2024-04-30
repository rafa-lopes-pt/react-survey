import React, { useState } from "react";

export default function Form({ onSubmit }) {
	function onSubmitHandler(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = {};
		for (const [key, value] of [...formData.entries()]) {
			data[key] = value;
		}
		console.log(data);
		onSubmit(data);
	}

	return (
		<form
			className="form"
			onSubmit={onSubmitHandler}>
			<h2>Tell us what you think about your rubber duck!</h2>
			<div className="form__group radio">
				<h3>How do you rate your rubber duck colour?</h3>
				<RangeInput name={"colour"} />
			</div>
			<div className="form__group">
				<h3>How do you like to spend time with your rubber duck</h3>
				<RangeInput name={"timeSpent"} />
			</div>
			<label>
				What else have you got to say about your rubber duck?
				<textarea
					name="review"
					cols="30"
					rows="10"></textarea>
			</label>
			<label>
				Put your name here (if you feel like it):
				<input
					type="text"
					name="username"
				/>
			</label>
			<label>
				Leave us your email pretty please??
				<input
					type="email"
					name="email"
				/>
			</label>
			<input
				className="form__submit"
				type="submit"
				value="Submit Survey!"
			/>
		</form>
	);
}

const RangeInput = ({ name }) => {
	const [value, setValue] = useState(0);
	return (
		<span>
			<input
				name={name}
				type="range"
				min={0}
				max={5}
				step={1}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				style={{ display: "inline" }}
			/>
			<p style={{ display: "inline", marginLeft: "1em" }}>{value}</p>
		</span>
	);
};
