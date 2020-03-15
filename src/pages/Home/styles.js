import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border: 1px solid #e3e3f3;
  background: #e2e2e2;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  text-overflow: ellipsis;
  word-wrap: break-word;
  line-height: 1.8em;
`

export const Image = styled.img`
  height: 250px;
  width: 80px;
`
export const Title = styled.h2``

export const Description = styled.p.attrs({})`
  overflow: hidden;
  box-sizing: content-box;
  width: 500px;
  line-height: 24px;

  max-lines: 3;
`

export const Tag = styled.p``

export const BuyButton = styled.button`
  display: flex;
  width: 150px;
  font-size: 14px;
  padding: 5px;
  border-radius: 4px;
  background: #ffff;
  justify-content: center;
  align-items: baseline;
`
