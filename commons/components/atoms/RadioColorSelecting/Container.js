import styled from 'styled-components';

const RadioButton = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  //border: 2px solid #fff;
  background: #0070f3;
  position: relative;
  &:after{
    content: '';
    width: 26px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 26px;
    border-radius: 50%;
    position: absolute;
    border: 2px solid #fff;
  }
`;

export {
  RadioButton
}