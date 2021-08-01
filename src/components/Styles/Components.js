import styled from "styled-components";
import {Link} from "react-router-dom";

export const Page = styled.div`
  .centralized{
    height:100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavBar = styled.div`
    height: 66px;
    width: 100%;
    background-color: #ab00db;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(68,68,68,0.9);
    
    .brand {
        padding-left: 66px;
        display: flex;
        div {
            background-color: white;
            height: 44px;
            width: 44px;
            border-radius: 40%;
            display: flex;
            align-items: center;
            font-weight: bold;
        }
        div:first-of-type {
            justify-content:center;
        }
        div:nth-of-type(2) {
            justify-content:flex-end;
        }
        div:nth-of-type(3){
            width: 54px;
        }
    }
`;

export const HomeContent = styled.div`
    width: 600px;
    height: 400px;  
    display: flex;
    justify-content: center;
    align-items: center;
    div:first-of-type {
        margin-right: 20px;
        box-shadow: 0px 3px 4px 0px rgba(68,68,68,0.9);
        padding: 5px;

    }
    div:last-of-type {
        margin-left: 20px;
        box-shadow: 0px 3px 4px 0px rgba(68,68,68,0.9);
        padding: 5px;
    }
`;

export const StyledLink = styled(Link)`

`;