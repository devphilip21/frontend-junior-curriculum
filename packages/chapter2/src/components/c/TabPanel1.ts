import { createElement as e } from '../../lib/react/ReactElement';
import TabPanel1Item from './TabPanel1Item';

export default function TabPanel1() {
	const children = [];
	
	for (let i = 0; i < 1000; i++) {
		children.push(e(TabPanel1Item, null, null));
	}

	return e('ul', { className: 'panel-1' }, children);
}
