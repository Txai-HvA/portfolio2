import {
    HeaderWrapper, HeaderList, HeaderListItem, HeaderLink
} from "./styles";




function Header({ title }) {
    return (
        <HeaderWrapper>
            <h1>Txai</h1>
            <HeaderList>
                <HeaderListItem>
                    <HeaderLink href="#">Projecten</HeaderLink>
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLink href="#">Over Mij</HeaderLink>
                </HeaderListItem>
            </HeaderList>
        </HeaderWrapper>
    );
}

export default Header;
