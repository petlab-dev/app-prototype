import styled from '@emotion/native';

import { constantsValue } from '../../constants';

const { COLOR_PRIMARY } = constantsValue;

export const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const CameraContainer = styled.View({
  flex: 1,
  backgroundColor: 'transparent',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const CameraButton = styled.TouchableOpacity({
  width: 80,
  height: 80,
  backgroundColor: 'white',
  borderRadius: 80,
  borderStyle: 'solid',
  borderColor: COLOR_PRIMARY,
  borderWidth: 4,
  alignSelf: 'flex-end',
  alignItems: 'center',
  marginBottom: 40,
});
