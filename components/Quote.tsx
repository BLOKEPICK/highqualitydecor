import { IconQuote } from './social-icons';

export default function Quote({ text, author }: { text: string; author: string; }) {
  return (
    <figure className="quote">
      <IconQuote style={{fontSize:32}} />
      <blockquote>{text}</blockquote>
      <figcaption>— {author}</figcaption>
    </figure>
  );
}
