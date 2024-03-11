import { createElement as e } from '../../lib/react/ReactElement';

export default function Main() {
	return e('main', { className: 'main' }, [
		e('p', { className: 'desc' }, 'Homework Finished...'),
	]);
}
