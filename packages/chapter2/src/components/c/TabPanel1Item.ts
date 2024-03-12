import { createElement as e } from '../../lib/react/ReactElement';

export default function TabPanel1Item() {
	let now = performance.now();
	while (performance.now() - now < 2) {}

	return e('li', { className: 'box' }, null);
}
