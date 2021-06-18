import { TextProps } from '@chakra-ui/react';
import extractRichText from '../../utils/extractRichText';
import { Container } from './styles';

interface RichTextProps extends TextProps {
  text: string;
}

const RichText: React.FC<RichTextProps> = ({ text, ...others }) => {
  return (
    <Container
      {...others}
      dangerouslySetInnerHTML={{ __html: extractRichText(text) }}
    />
  );
};

export default RichText;
