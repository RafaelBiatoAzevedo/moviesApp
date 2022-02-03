import React, { FC } from 'react';

import { Text } from '~/components/Text';
import { Wrapper } from './styles';
import IconSearch from 'react-native-vector-icons/Fontisto';
import IconList from 'react-native-vector-icons/Foundation';
import { useTheme } from 'styled-components';
import { Button } from '../Button';

export const TopMenu: FC = (): JSX.Element => {
  const { colors, responsive } = useTheme();
  const handleShowMenu = (): void => {
    console.log('menu');
  };
  const handleSearch = (): void => {
    console.log('search');
  };
  return (
    <Wrapper>
      <Button
        backgroundColor="tranparent"
        onPress={handleShowMenu}
        icon={
          <IconList
            name="list"
            color={colors.primary}
            size={responsive.wp('8%')}
          />
        }
      />
      <Text color="primary" align="center" size="veryLarge">
        MOVIES APP
      </Text>
      <Button
        onPress={handleSearch}
        icon={
          <IconSearch
            name="search"
            color={colors.primary}
            size={responsive.wp('6%')}
          />
        }
      />
    </Wrapper>
  );
};
