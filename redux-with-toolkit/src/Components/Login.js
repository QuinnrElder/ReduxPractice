import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Features/user";

export function Login() {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					dispatch(
						login({ name: "Quinn", age: 27, email: "bbblblb@kgsksf.com" })
					);
				}}
			>
				Login
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</div>
	);
}
