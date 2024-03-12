import { useTransition } from '../../lib/react/Transition';
import { createElement as e } from '../../lib/react/ReactElement';

export default function TabButtons ({
  index,
  onChange
}: {
  index: number;
  onChange: (newIndex: number) => void;
}) {
	const [isPending, startTransition] = useTransition();
	const rootClassName = isPending ? 'tab-buttons pending' : 'tab-buttons';

	function getButtonClassName(i: number) {
		return i === index ? 'btn selected' : 'btn';
	}

	function handleChange(i: number) {
		startTransition(() => {
			onChange(i);
		});
	}

	return e('div', { className: rootClassName }, [
		e('button', {
			className: getButtonClassName(0),
			onClick: () => handleChange(0),
		}, 'Tab0'),
		e('button', {
			className: getButtonClassName(1),
			onClick: () => handleChange(1),
		}, 'Tab1'),
		e('button', {
			className: getButtonClassName(2),
			onClick: () => handleChange(2),
		}, 'Tab2'),
	]);
}

