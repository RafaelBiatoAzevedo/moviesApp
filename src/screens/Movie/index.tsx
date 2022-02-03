import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import {
  Image,
  WrapperScroll,
  Wrapper,
  WrapperAdult,
  WrapperButton,
  WrapperInfo,
  WrapperTopInfo,
  WrapperLink,
  WrapperRanking,
} from './styles';
import IconBack from 'react-native-vector-icons/Ionicons';
import { TRootStackParamList } from '~/types/TRootStackParamList';
import { useTheme } from 'styled-components';
import { TRootState } from '~/types/TRootState';
import { getUriImage } from '~/services/image';
import { removeMovieSlected } from '~/redux/actions';
import IconStar from 'react-native-vector-icons/FontAwesome';
import IconWeb from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '~/components/Text';
import { ScrollView, Linking } from 'react-native';

export const Movie: FC = (): JSX.Element => {
  const { colors, responsive } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();
  const movie = useSelector((state: TRootState) => state.movie);
  const [poster, setPoster] = useState(
    getUriImage('original', movie.poster_path)
  );
  const dispatch = useDispatch();

  const handlePressGoBack = () => {
    dispatch(removeMovieSlected());
    navigation.goBack();
  };

  const handlePressLink = useCallback(async (url: string): Promise<void> => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  }, []);

  useEffect(() => {
    const intevalId = setInterval(() => {
      setPoster((prev) => {
        if (prev === getUriImage('original', movie.poster_path)) {
          return getUriImage('original', movie.backdrop_path);
        }
        return getUriImage('original', movie.poster_path);
      });
    }, 5000);

    return () => clearInterval(intevalId);
  }, []);

  return (
    <Wrapper>
      <WrapperButton>
        <Button
          onPress={handlePressGoBack}
          icon={
            <IconBack
              name="arrow-back"
              color={colors.primary}
              size={responsive.wp('8%')}
            />
          }
          paddingY="1%"
        />
      </WrapperButton>
      <ScrollView>
        <WrapperScroll>
          <Image source={{ uri: poster }} />
          <WrapperInfo>
            <WrapperRanking>
              <IconStar name="star" size={responsive.wp('3%')} color="yellow" />
              <Text color="warning">{`${movie.vote_average} / 10`}</Text>
              <Text color="primary">
                {movie.vote_count > 1000
                  ? `${Math.ceil(movie.vote_count / 1000)}K`
                  : movie.vote_count}
              </Text>
            </WrapperRanking>
            <WrapperTopInfo>
              <WrapperAdult
                color={movie.adult ? colors.danger : colors.warning}
              >
                <Text color="primary" size="medium">
                  18
                  {movie.adult ? '+' : '-'}
                </Text>
              </WrapperAdult>
              <Text>
                {movie.genres.map((genre, index) => (
                  <Text key={genre.id} color="primary" size="smallMedium">
                    {` ${genre.name} ${
                      index + 1 !== movie.genres.length ? '/' : ''
                    }`}
                  </Text>
                ))}
              </Text>
            </WrapperTopInfo>
            <Text color="primary" size="medium">
              {`${movie.title} - ${movie.release_date.slice(0, 4)}`}
            </Text>
            <Text color="primary" size="small">
              {movie.overview}
            </Text>
          </WrapperInfo>
          <Button
            onPress={() => handlePressLink(movie.homepage)}
            icon={
              <IconWeb
                name="web"
                color={colors.primary}
                size={responsive.wp('7%')}
              />
            }
            title="Site"
            fontColor="primary"
            fontSize="medium"
            paddingY="3%"
          />
        </WrapperScroll>
      </ScrollView>
    </Wrapper>
  );
};
