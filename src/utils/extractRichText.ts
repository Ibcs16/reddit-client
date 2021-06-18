import { decode as decodeHtml } from 'html-entities';

export default function extractRichText(richText: string): string {
  if (!richText) return '';
  let finalString = richText;
  finalString = finalString.replace('&lt;!-- SC_OFF --&gt;', '');
  finalString = finalString.replace('&lt;!-- SC_ON --&gt;', '');

  return decodeHtml(finalString);
}
