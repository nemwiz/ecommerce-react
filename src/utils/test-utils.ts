import { fireEvent } from 'react-testing-library';

export const clickElement = (element: HTMLElement) => {
	fireEvent(
		element,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true
		})
	);
};
