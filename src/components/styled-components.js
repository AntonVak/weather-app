import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 100px;
  background-color: #e6e6e6;
  margin: 0;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2); 
`
const UlList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 22px;
  line-height: 18px;  
  list-style: none;
  margin: 0px 20px;
  /* text-decoration: none; */
   
`
const LiList = styled.li`
    padding-left: 20px;
    color: white;
    
   
`

const TomatoLiList = styled(LiList)`
  background: tomato;
  text-decoration: none;
`
// const Button = styled.button`
//   padding: 7px 12px;
//   cursor: pointer;
//   background-color: #6B7A8F;
//   color: white;
//   text-transform: uppercase;
// `
// const Input = styled.input`
//   height: 30px;
//   width: 200px;
//   font-size: 30px;
//   display: inline-block;
//   text-align: center;
// `

export {Header, UlList, LiList, TomatoLiList};