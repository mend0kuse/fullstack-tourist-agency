import { Main } from "../pages/Main";

import {
	createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	}
]);

