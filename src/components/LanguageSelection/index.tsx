import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  MdClose,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
  MdTranslate
} from 'react-icons/md';
import { Icon } from '@chakra-ui/react';

import { Badge, Container, Language, TranslationBox } from './styles';

const LanguageSelection: FC = ({ ...others }) => {
  // translation
  const { t, i18n } = useTranslation();
  // selected language state
  const [languageChange, setLanguageChange] = useState('');

  // available langues
  const [languages, setLanguages] = useState([]);

  // translation box display state
  const [tBoxIsClosed, settBoxIsClosed] = useState(true);

  // translation box animation

  // reload component on language selection
  useEffect(() => {
    setLanguages([
      {
        name: t('localization.english-us'),
        ln: 'en',
        isSelected: i18n.language === 'en' || i18n.language === 'en-US'
      },
      {
        name: t('localization.spanish-es'),
        ln: 'es',
        isSelected: i18n.language === 'es' || i18n.language === 'es-ES'
      },
      {
        name: t('localization.portuguese-br'),
        ln: 'pt-BR',
        isSelected: i18n.language === 'pt-BR' || i18n.language === 'pt-br'
      }
    ]);
  }, [i18n.language, languageChange, setLanguages, t]);

  // if language is selected, changes selected language
  const changeLanguage = async (ln) => {
    console.log(i18n, 'i18n');
    await i18n.changeLanguage('en-US');
    setLanguageChange(ln);
  };

  // toggle language selection box
  const toggleTBox = () => {
    settBoxIsClosed(!tBoxIsClosed);
  };

  // return component
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 9999
      }}
    >
      <Container {...others}>
        <TranslationBox
          initial="closed"
          animate={!tBoxIsClosed ? 'open' : 'close'}
          variants={{
            open: {
              display: 'block',
              transform: 'scale(1)',
              opacity: 1
            },
            closed: {
              display: 'none',
              transform: 'scale(0)',
              opacity: 1
            }
          }}
          transition={{ duration: 0.2 }}
        >
          {languages.map((language) => (
            <Language
              selected={language.isSelected}
              key={language.ln}
              onClick={() => changeLanguage(language.ln)}
            >
              <p>{language.name}</p>
              <button type="button" onClick={() => changeLanguage(language.ln)}>
                {language.isSelected ? (
                  <Icon
                    as={MdRadioButtonChecked}
                    h={6}
                    w={6}
                    color="rgb(4,211,97)"
                  />
                ) : (
                  <Icon as={MdRadioButtonUnchecked} h={6} w={6} color="#fff" />
                )}
              </button>
            </Language>
          ))}
        </TranslationBox>
        <Badge>
          {tBoxIsClosed ? (
            <Icon
              as={MdTranslate}
              data-tip={t('localization.change-language')}
              w={8}
              h={8}
              color="secondary.100"
              onClick={toggleTBox}
            />
          ) : (
            <Icon
              as={MdClose}
              data-tip={t('localization.close-language')}
              w={8}
              h={8}
              color="secondary.100"
              onClick={toggleTBox}
            />
          )}
        </Badge>
      </Container>
    </div>
  );
};

export default LanguageSelection;
