import { createGlobalStyle,  styled } from "styled-components";

export const Global = createGlobalStyle`
*, *::after, &::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const Main = styled.div`
  border: 1px solid #6950A1;
  padding: 20px;
  margin: 70px auto;
  max-width: 920px;
  width: 100%;
  border-radius: 6px;
`

export const Header = styled.header`
  background: #6950A1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`

export const Nav = styled.nav`
  a {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
`

export const Button = styled.button`
  width: 227px;
  height: 49px;
  border: 0;
  background: #6950A1;
  color: #fff;
  border-radius: 1rem;
`