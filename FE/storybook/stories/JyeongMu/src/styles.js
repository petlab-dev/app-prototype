import styled from '@emotion/native';

export const constants = {
  COLOR_SECONDARY: '#71C0BB',
  COLOR_LIGHT: '#808080',
  COLOR_LIGHTER: '#EEEEEE',
  COLOR_LIGHTEST: '#FFF',
};

const {
  // COLOR_SECONDARY,
  // COLOR_LIGHT,
  COLOR_LIGHTER,
  // COLOR_LIGHTEST,
} = constants;

export const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
});

export const Header = styled.View({
  flex: 1,
  alignItems: 'center',
  height: '7%',
  padding: '5%',
  margin: '10%',
});

export const HeaderText = styled.Text({
  fontSize: 30,
  fontStyle: 'italic',
  color: 'black',
});

export const Body = styled.View({
  flex: 9,
  alignItems: 'center',
});

export const Select = styled.View({
  flexDirection: 'row',
  margin: '5%',
  justifyContent: 'space-around',
});

export const TextInputWrap = styled.View({
  padding: '2%',
  margin: '5%',
  borderRadius: 10,
  backgroundColor: COLOR_LIGHTER,
  width: '80%',
});

export const ButtonContainer = styled.View({
  width: '80%',
});

export const SelectButton = styled.View({
  flex: 1,
  alignItems: 'center',
});

export const SelectButtonColor = styled.Text(({ active }) => ({
  fontSize: 25,
  fontWeight: 'bold',
  color: active ? '#1e90ff' : '#87cefa',
}));

export const TextWrap = styled.Text({
  fontSize: 15,
});
