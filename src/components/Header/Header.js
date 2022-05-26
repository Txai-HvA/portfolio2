import {
    HeaderWrapper,
    HeaderList,
    HeaderListItem,
    Logo
} from "./styles";
import { Link } from "react-router-dom";

function Header({ title }) {
    return (
        <HeaderWrapper>
            <Logo />
            <HeaderList>
                <HeaderListItem>
                    <Link to="/">Projecten</Link>
                </HeaderListItem>
                <HeaderListItem>
                    <Link to="/aboutme">Over Mij</Link>
                </HeaderListItem>
            </HeaderList>
        </HeaderWrapper>
    );
}

export default Header;
