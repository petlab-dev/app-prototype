import styled from '@emotion/native';

import { constantsValue } from '../constants';

const { COLOR_PRIMARY } = constantsValue;

export const HeaderTitle = styled.TouchableOpacity({
  justifyContent: 'center',
  alignItems: 'center',
});

export const HeaderTitleText = styled.Text({
  color: COLOR_PRIMARY,
  fontSize: 20,
  fontWeight: 'bold',
});

export const HeaderSide = styled.TouchableOpacity({
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20,
});
