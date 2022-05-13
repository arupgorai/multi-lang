import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    if (toggleButton) {
      i18n.changeLanguage('hn');
    } else {
      i18n.changeLanguage('en');
    }
  }, [toggleButton]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{t('greet')}</Text>
      <Button
        title={toggleButton ? 'english' : 'hindi'}
        onPress={() => {
          setToggleButton(!toggleButton);
        }}
      />
    </View>
  );
};

export default App;
