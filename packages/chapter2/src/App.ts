import { createElement as e } from './lib/react/ReactElement';
import Header from './components/Header';
import MainA from './components/a/Main';
import MainB from './components/b/Main';
import MainC from './components/c/Main';

let Main = MainA;
switch (process.env.SUBJECT?.toUpperCase()) {
	case 'A':
		Main = MainA;
		break;
	case 'B':
		Main = MainB;
		break;
	case 'C':
		Main = MainC;
		break;
}


export default function App () {
	return e('div', { className: 'wrap' }, [
		e(Header, null, null),
		e(Main, null, null),
	]);
}
