import { writable } from 'svelte/store';

export const parts = writable({
	accessories: '',
	backgrounds: '',
	ears: '',
	eyes: '',
	hair: '',
	leg: '',
	mouth: '',
	neck: ''
});
