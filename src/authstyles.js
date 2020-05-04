import styled from 'styled-components'

export const AuthContainer = styled.form`
  padding: 100px;
  border: 1px solid rgba(0,102,245,.15);
  box-shadow: 1px 15px 18px rgba(0,0,0,.03);
  border-radius: 6px;
  background-color: #fff;
  width: 400px;

  > div{
    margin-bottom: 30px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: blue;
  color: #ffffff;
  padding: 10px;
  outline: none;
  cursor: pointer;

  &:disabled{
    opacity: 0.5;
    cursor: not-allowed; 
  }
`