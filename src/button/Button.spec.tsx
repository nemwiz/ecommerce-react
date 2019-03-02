import React from 'react';
import Button from './Button';
import { render } from 'react-testing-library';
import { clickElement } from '../utils/test-utils';

it('renders without crashing', () => {
	const { getByText } = render(<Button label={'helloTest'} />);
	expect(getByText('helloTest')).toBeInTheDocument();
});
it('calls the passed in function when button is clicked', () => {
	const dummyClick = jest.fn();
	const buttonLabel = 'testButton';
	const { getByText } = render(
		<Button label={buttonLabel} clickFunction={dummyClick} />
	);

	clickElement(getByText(buttonLabel));
	clickElement(getByText(buttonLabel));
	expect(dummyClick).toHaveBeenCalledTimes(2);
});
