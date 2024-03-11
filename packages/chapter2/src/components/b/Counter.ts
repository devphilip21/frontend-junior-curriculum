import { createElement as e } from '../../lib/react/ReactElement';

export default function Counter({
  count,
  color,
}: {
  count: number;
  color: boolean;
}) {
  return e(
    'span',
    { className: color ? 'count color' : 'count' },
    `${count}`
  );
}
