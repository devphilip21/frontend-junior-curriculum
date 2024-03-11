import { createElement as e } from '../../lib/react/ReactElement';

export default function TabButtons ({
  index,
  onChange
}: {
  index: number;
  onChange: (newIndex: number) => void;
}) {
	const rootClassName = 'tab-buttons';
	
	function getButtonClassName(i: number) {
		return i === index ? 'tab selected' : 'tab';
	}

	return e('div', { className: rootClassName }, [
		e('button', {
			className: getButtonClassName(0),
			onClick: () => {
				onChange(0);
			},
		}, 'Tab0'),
		e('button', {
			className: getButtonClassName(1),
			onClick: () => {
				onChange(1);
			},
		}, 'Tab1'),
	]);
}

