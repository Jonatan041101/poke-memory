import { ColorsNotification } from '@/types/types';
import { StateCreator } from 'zustand';

export interface OneNotify {
	text: string;
	color: ColorsNotification;
}

export interface Notification {
	notification: OneNotify[];
	createNotification: (text: string, color: ColorsNotification) => void;
	deleteNotification: () => void;
}

export const notificationSlice: StateCreator<Notification> = (set) => ({
	notification: [],
	createNotification: (text, color) => {
		set((state) => ({
			...state,
			notification: [{ text, color }, ...state.notification],
		}));
	},
	deleteNotification: () => {
		set((state) => ({
			...state,
			notification: state.notification.slice(0, state.notification.length - 1),
		}));
	},
});
