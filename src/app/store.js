import { configureStore } from "@reduxjs/toolkit";
import showData from "../features/showSlics";

export const store = configureStore({
	reducer : {
		show : showData
	}
})