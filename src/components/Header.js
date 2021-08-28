import styled from 'styled-components'

const Caixa = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
`

const Retangulo = styled.div`
  width: 500px;
  height: 300px;
  background-color: red;
`
const Link = styled.a`
  color: cyan;
`

function Header() {
  return (
    <>
      <Retangulo>
        <Caixa>
          Texto da Caixa 
          <Link href="http://www.netflix.com"> Link</Link>
        </Caixa>
      </Retangulo>
    </>
  )
}

export default Header
