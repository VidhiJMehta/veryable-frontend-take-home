import GroupIcon from '../assets/group.svg';
function Header() {
    return (
        <header style={{textAlign: 'center', backgroundColor: 'white', minHeight: '64px', marginBottom: '16px'}}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                <img src={GroupIcon} style={{marginRight: '10px', color: '#2081C3'}}/>
                <h1>USERS</h1>
            </div>
        </header>
    );
}

export default Header;