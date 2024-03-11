import { useState } from '../../lib/react/Hooks';
import { createElement as e } from '../../lib/react/ReactElement';
import TabButtons from './TabButtons';
import TabPanel0 from './TabPanel0';
import TabPanel1 from './TabPanel1';

export default function Main() {
	const [tabIndex, setTabIndex] = useState(0);

	return e('main', { className: 'main' }, [
		e(TabButtons, { index: tabIndex, onChange: setTabIndex }, null),
		tabIndex === 0
			? e(TabPanel0, null, null)
			: e(TabPanel1, null, null)
	]);
}
