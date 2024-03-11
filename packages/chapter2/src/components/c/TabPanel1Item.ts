import { createElement as e } from '../../lib/react/ReactElement';

export default function TabPanel1Item() {
	let now = performance.now();
	while (performance.now() - now < 1) {}

	return e('li', { className: 'panel-1-item' }, null);
}
