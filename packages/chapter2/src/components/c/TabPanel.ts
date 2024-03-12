import { createElement as e } from '../../lib/react/ReactElement';

export default function TabPanel({ content }: { content: string; }) {
	return e('p', { className: 'panel' }, content); 
}
