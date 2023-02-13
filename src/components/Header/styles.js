import styled from 'styled-components'

export const Container = styled.div`
  display: flex; align-items: center; 
  justify-content: space-around; 
  padding: 1rem; 
  background-color: white; color: #fff;

  link{
     font-style: normal;
   font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: white;

  }
`

export const Title = styled.span`
font-size: 3rem; 
margin-left: 1rem;
font-weight: 700;
font-size: 24px;
line-height: 36px;
background-color: red;
`

export const Button = styled.button`
 cursor: pointer;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  background:  #33A4F5;
  border-radius: 8px;
 
`

export const CatchButton = styled.button`
   cursor: pointer;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  background: ${(props) => props.background};
  color:  ${(props) => props.color};`
;

// export const Linkar =styled.link`
//  font-style: normal;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 36px;
//   color: white;



// `