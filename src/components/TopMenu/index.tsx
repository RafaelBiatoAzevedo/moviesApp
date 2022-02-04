import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '~/components/Text';
import { Wrapper, InputSearch, WrapperTitle, WrapperFilters } from './styles';
import IconMovie from 'react-native-vector-icons/MaterialIcons';
import IconSearch from 'react-native-vector-icons/Fontisto';
import IconSettings from 'react-native-vector-icons/Octicons';
import { useTheme } from 'styled-components';
import { Button } from '../Button';
import { setTitleFilter } from '~/redux/actions';
import { FiltersMenu } from '../FiltersMenu';

export const TopMenu: FC = (): JSX.Element => {
  const { colors, responsive } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  const handleShowFilters = (): void => {
    setShowFilters((prev) => !prev);
  };
  const handleSearch = (): void => {
    setShowSearch((prev) => !prev);
  };

  const onChange = (text: string): void => {
    dispatch(setTitleFilter(text));
  };

  return (
    <Wrapper>
      <WrapperTitle>
        <IconMovie name="local-movies" size={responsive.wp('6%')} color="red" />
        <Text color="secondary" align="center" size="veryLarge" paddingX="2%">
          MOVIES APP
        </Text>
      </WrapperTitle>
      <WrapperFilters>
        <Button
          onPress={handleShowFilters}
          icon={
            <IconSettings
              name="settings"
              color={colors.primary}
              size={responsive.wp('7%')}
            />
          }
        />
        {showSearch && (
          <InputSearch autoFocus onChangeText={(text) => onChange(text)} />
        )}
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
      </WrapperFilters>
      {showFilters && <FiltersMenu />}
    </Wrapper>
  );
};
