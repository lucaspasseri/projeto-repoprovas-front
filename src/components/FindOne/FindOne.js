import { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { Page, NavBar} from "../Styles/Components";
import logo from "../../assets/logo.jpg";

export default function FindOne(){

    const [options, setOptions] = useState([false,false]);
    const [chosenContent, setChosenContent] = useState([]);

    function selectOption(option){
        if(option ==="professors"){
            if(options[0]){
                setOptions([false, false]);
            } else {
                setOptions([true, false]);
                const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/professors`);
                request.then(response => setChosenContent(response.data));
                request.catch(error => alert(`${error.response.status} ${error.response.statusText}`));
            }
        } else {
            if(options[1]){
                setOptions([false, false]);
            } else {
                setOptions([false, true]);
                const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subjects`);
                request.then(response => setChosenContent(response.data));
                request.catch(error => alert(`${error.response.status} ${error.response.statusText}`));
            }
        }
    }

    const showContent = chosenContent.map(item => <div key={item.id}>{item.name}</div>)

    return(
        <Page>
            <NavBar>
                <div className="brand">
                    <div><img src={logo} alt="logo" height="30px"/></div>
                    <div>Repo</div>
                    <div>Provas</div>
                </div>
            </NavBar>

            <div className="centralized">
                <Content selected={options}>
                    <div className="options">
                        <div onClick={()=>selectOption("professors")}>
                            Professores
                        </div>                         
                            
                        <div onClick={()=>selectOption("subjects")}>
                            Disciplinas
                        </div>              
                    </div>
                    <div>
                        {showContent}
                    </div>
                </Content>
            </div>
        </Page>
    );
}

const Content = styled.div`
    margin-top: 20px;
    width: 600px;
    height: 400px;
    border: 1px solid purple;

    .options {
        display: flex;
        height: 10%;
        
        div {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 3px 4px 0px rgba(68,68,68,0.9);
        }

        div:first-of-type {
            background: ${props => props.selected[0] ? "#ab00db" : "#FFF"};      
        }
        div:last-of-type {
            background: ${props => props.selected[1] ? "#ab00db" : "#FFF"};      
        }
    }
`;