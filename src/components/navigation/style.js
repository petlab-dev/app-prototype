import styled from '@emotion/native';

import { COLOR_PRIMARY } from '../constants';

export const HeaderTitle = styled.TouchableOpacity({
  justifyContent: 'center',
  alignItems: 'center',
});

export const HeaderTitleText = styled.Text({
  fontFamily: 'Nunito_900Black',
  color: COLOR_PRIMARY,
  fontSize: 25,
  fontWeight: 'bold',
});

export const HeaderSide = styled.TouchableOpacity({
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20,
});
