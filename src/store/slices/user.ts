import { StateCreator } from 'zustand';
export interface UserGame {
	userName: string;
	changeName: (name: string) => void;
}

export const userSlice: StateCreator<UserGame> = (set) => ({
	userName: '',
	changeName: (name) => {
		return set((state) => ({
			...state,
			userName: name,
		}));
	},
});
