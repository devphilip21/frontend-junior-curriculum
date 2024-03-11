import { createElement as e } from '../../lib/react/ReactElement';

export default function Button({
  content,
  onClick,
}: {
  content: string;
  onClick: () => void;
}) {
  return e(
    'button',
    {
      className: 'btn',
      onClick,
    },
    content,
  );
}
