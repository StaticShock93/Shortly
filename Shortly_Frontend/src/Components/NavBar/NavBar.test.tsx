import {render, screen, fireEvent} from '@testing-library/react';
import NavBar from './NavBar';
import {vi} from 'vitest';

describe('NavBar Component', () => {
	//check logo is rendered
	//check links are rendered
	//check sign up and login button is rendered
	//check mobile menu icon is rendered
	//check dropdown menu is rendered when clicked
	//check drowndown menu is hidden when re-clicked
	it('renders navbar correctly', () => {
		//arrange
		const mockGetChildData = vi.fn();
		//act
		render(<NavBar getChildData={mockGetChildData} />);
		//assert
		expect(screen.getByRole('navigation')).toBeInTheDocument();

		// check logo is within navbar
		const logo = screen.getByAltText('Shortly');
		expect(logo).toBeInTheDocument();

		//check links
		const links = screen.getAllByRole('listitem');
		expect(links.length).toBeGreaterThanOrEqual(6);

		// check signUp button
		const button = screen.getByRole('button', {name: 'Sign Up'});
		expect(button).toBeInTheDocument();

		//check loginLink
		// const loginLink = screen.getByText('Login');
		const loginLink = links.find((link) => link.textContent?.includes('Login'));
		expect(loginLink).toBeInTheDocument();
	});
});


