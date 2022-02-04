import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const theme = {
  colors: {
    primary: '#ffffff',
    secondary: 'red',

    transparent: 'transaparent',
    backgroungColor: '#000000',

    warning: '#ffc107',
    danger: '#dc3545',

    textPattern: '#000000',
  },

  fontSizes: {
    small: widthPercentageToDP('2.8%'),
    smallMedium: widthPercentageToDP('3.2%'),
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
