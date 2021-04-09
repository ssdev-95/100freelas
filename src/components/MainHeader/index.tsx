import { Nav, Line, Div, Logo, Text } from './styles'

export default function Header() {
    return (
      <Nav>
        <Div style={{width: '104px'}}>
          <Logo src="images/logo.svg"/>
          <div style={{display: 'flex'}}>
            <img src="images/alert.svg" alt=""/>
            <Text>Voce tem 2 horas livres no seu dia</Text>
          </div>
        </Div>
        <Line />
       <Div style={{width: '176px'}}></Div>
      </Nav>
    )
  }
