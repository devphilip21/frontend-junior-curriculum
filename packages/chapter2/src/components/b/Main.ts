import { useState } from '../../lib/react/Effects';
import { createElement as e } from '../../lib/react/ReactElement';
import Counter from './Counter';
import Button from './Button';

export default function Main() {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState(false);
  
	return e('main', { className: 'main' }, [
		e(Counter, { count, color }, null),
		e(Button, { content: '+', onClick: () => setCount(count + 1) }, null),
		e(Button, { content: 'color', onClick: () => setColor(!color) }, null),
	]);
}
