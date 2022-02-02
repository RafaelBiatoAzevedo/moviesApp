import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const theme = {
  colors: {
    primary: '#F9C210',
    secondary: '#000000',

    backgroungColor: '#000000',

    textPattern: '#000000',
  },

  fontSizes: {
    small: widthPercentageToDP('2.8%'),
    medium: widthPercentageToDP('4%'),
    large: widthPercentageToDP('5%'),
    largeMedium: widthPercentageToDP('5.8%'),
    veryLarge: widthPercentageToDP('6.3%'),
  },

  responsive: {
    hp: heightPercentageToDP,
    wp: widthPercentageToDP,
  },
};
