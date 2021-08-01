import { Page, NavBar, HomeContent, StyledLink } from "../Styles/Components";

import logo from "../../assets/logo.jpg";
import lupa from "../../assets/lupa.svg";
import newExam from "../../assets/new-exam.svg";

export default function Home(){
    return (
        <Page>
            <NavBar>
                <div className="brand">
                    <div><img src={logo} height="30px"/></div>
                    <div>Repo</div>
                    <div>Provas</div>
                </div>
            </NavBar>

            <div className="centralized">
                <HomeContent>
                    <div className="find-exam">
                        <StyledLink to="/find-one">
                            <img src={lupa} height="120px"/>
                        </StyledLink>
                    </div>
                    <div className="new-exam">
                        <StyledLink to="/new-one">
                            <img src={newExam} height="120px"/>
                        </StyledLink>
                    </div>               
                </HomeContent>
            </div>
        </Page>
    );
}