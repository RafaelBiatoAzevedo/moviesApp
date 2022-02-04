import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

DropDownPicker.addTranslation('BR', {
  PLACEHOLDER: 'Selecione 1 ou mais',
  SEARCH_PLACEHOLDER: 'Talvez queira escolher ...',
  SELECTED_ITEMS_COUNT_TEXT: '{count} items foram selecionados',
  NOTHING_TO_SHOW: 'Não hà items para selecionar',
});

DropDownPicker.setLanguage('BR');

import {
  resetFilters,
  setGenresFilter,
  setReleaseYearsFilter,
  setVoteAverageFilter,
} from '~/redux/actions';
import { TRootState } from '~/types/TRootState';
import { useTheme } from 'styled-components';

import { Text } from '../Text';
import { Button } from '../Button';

import {
  Wrapper,
  WrapperDropDown,
  WrapperSort,
  WrapperButtons,
} from './styles';

export const FiltersMenu: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const genres = useSelector((state: TRootState) => state.genres);
  const filters = useSelector((state: TRootState) => state.filters);

  const [openDropGenre, setOpenDropGenre] = useState(false);
  const [valueGenres, setValueGenres] = useState<ValueType[] | null>(
    filters.genres
  );
  const [itemsGenres, setItemsGenres] = useState(
    genres.map((genre) => ({
      label: genre.name,
      value: genre.name,
    }))
  );

  const [openDropYear, setOpenDropYear] = useState(false);
  const [valueYears, setValueYears] = useState<ValueType[] | null>(
    filters.releaseYears
  );
  const [itemsYears, setItemsYears] = useState(() => {
    let years = [];
    for (let i = 1888; i <= new Date().getFullYear(); i += 1) {
      years.push(i);
    }
    return years
      .reverse()
      .map((year) => ({ label: String(year), value: String(year) }));
  });

  useEffect(() => {
    dispatch(setGenresFilter(valueGenres));
  }, [valueGenres, dispatch]);

  useEffect(() => {
    dispatch(setReleaseYearsFilter(valueYears));
  }, [valueYears, dispatch]);

  const handlePressSort = (sort: string): void => {
    dispatch(setVoteAverageFilter(sort));
  };

  const handleResetFilters = (): void => {
    setValueGenres([]);
    setValueYears([]);
    dispatch(resetFilters());
  };

  return (
    <Wrapper>
      <Text color="primary" size="large" paddingY="1%">
        Filtros
      </Text>
      <WrapperDropDown>
        <Text color="primary" size="smallMedium">
          Gêneros
        </Text>
        <DropDownPicker
          open={openDropGenre}
          value={valueGenres}
          items={itemsGenres}
          setOpen={setOpenDropGenre}
          setValue={setValueGenres}
          setItems={setItemsGenres}
          multiple={true}
          min={0}
          max={genres.length}
          placeholder="Selecione 1 ou mais"
          zIndex={2000}
        />
      </WrapperDropDown>

      <WrapperDropDown>
        <Text color="primary" size="smallMedium">
          Ano Lançamento
        </Text>
        <DropDownPicker
          open={openDropYear}
          value={valueYears}
          items={itemsYears}
          setOpen={setOpenDropYear}
          setValue={setValueYears}
          setItems={setItemsYears}
          multiple={true}
          min={0}
          max={genres.length}
          placeholder="Selecione 1 ou mais"
          zIndex={1000}
        />
      </WrapperDropDown>
      <WrapperSort>
        <Text color="primary" size="smallMedium">
          Ordem Ranking
        </Text>
        <WrapperButtons>
          <Button
            onPress={() => handlePressSort('ASC')}
            title="CRESCENTE"
            backgroundColor={
              filters.voteAverageSort === 'ASC' ? colors.primary : 'transparent'
            }
            fontColor={
              filters.voteAverageSort === 'ASC' ? 'textPattern' : 'primary'
            }
            fontSize="smallMedium"
            withBorder
            paddingX="4%"
            paddingY="2%"
            mRight="4%"
          />
          <Button
            onPress={() => handlePressSort('DESC')}
            title="DECRESCENTE"
            backgroundColor={
              filters.voteAverageSort === 'DESC'
                ? colors.primary
                : 'transparent'
            }
            fontColor={
              filters.voteAverageSort === 'DESC' ? 'textPattern' : 'primary'
            }
            fontSize="smallMedium"
            withBorder
            paddingX="4%"
            paddingY="2%"
          />
        </WrapperButtons>
      </WrapperSort>
      <Button
        onPress={handleResetFilters}
        title="LIMPAR"
        fontColor="primary"
        fontSize="medium"
        withBorder
        paddingX="5%"
        paddingY="2%"
        mTop="10%"
        mBottom="3%"
      />
    </Wrapper>
  );
};
