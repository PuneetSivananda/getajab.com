/** @tsx h */
import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('Covid Portal - Bengaluru');
		expect(context.find('Link').length).toBe(1);
	});
});

describe('Second Test of the Header', () => {
	test('Header Displays Peact app', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('Covid Portal - Bengaluru');
	});
});
