import { useState } from '../../lib/react/Effects';
import { createElement as e } from '../../lib/react/ReactElement';
import TabButtons from './TabButtons';
import TabPanel from './TabPanel';
import TabPanel1 from './TabPanel1';

export default function Main() {
	const [tabIndex, setTabIndex] = useState(0);

	function onChange(index: number) {
		setTabIndex(index);
	}

	return e('main', { className: 'main' }, [
		e(TabButtons, { index: tabIndex, onChange }, null),
		tabIndex === 0
			? e(TabPanel, { content: 'Panel 0' }, null)
			: tabIndex === 1
				? e(TabPanel1, null, null)
				: e(TabPanel, { content: 'Panel 2' }, null)
	]);
}
