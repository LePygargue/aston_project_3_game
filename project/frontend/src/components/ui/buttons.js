export default function GameButton({ children, ...attributes }) {
  return (
    <button type="button" {...attributes}>
      {children}
      {Text}
    </button>
  );
}
