import styled from 'styled-components'
import colors from '../../../colors.json'

export const Nav = styled.nav`
    width: 100%;
    height: 17.5rem;
    background: ${colors.light.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Line = styled.hr`
    width: 80vw;
    height: 1.5px;
    background: ${colors.light.background};
`

export const Div = styled.div`
    height: 6.5rem;
    width: 80vw;
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.img`
    height: 48px;
    width: 208px;
`

export const Text = styled.h2`
    color: ${colors.light.text};
    font-family: 'Inter';
`
