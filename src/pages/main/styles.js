import styled from 'styled-components/native';

// Evita-se o uso de Tricks para manter o layout ao rotacionar
export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #039be5;
`;

export const Container = styled.View`
  flex: 1;
  background: #039be5;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const Input = styled.TextInput`
  font-size: 13px;
  color: #000;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-horizontal: 10px;
  margin-vertical: 2px;
  border-radius: 5px;
`;

export const Button = styled.Button`
  font-size: 13px;
  background-color: #fff;
  color: #fff;
  margin-horizontal: 10px;
  margin-vertical: 2px;
`;
