import { render, screen } from '@testing-library/react';
import Testing from '../pages/Testing';

test('printing sathya in testing page', () => {
	render(<Testing />);
	const testing = screen.getByTestId('test');
	expect(testing).toBeInTheDocument();
});
