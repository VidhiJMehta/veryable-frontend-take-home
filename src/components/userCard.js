import expand_more from '../assets/expand_more.svg';
import user from '../assets/user.svg';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Icon} from '@mui/material';
import '../userCard.css';

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    
    if (cleaned.length === 10) {
        return ('(' + cleaned.substring(0,3) + ') ' + cleaned.substring(3,6) + '-' + cleaned.substring(6,10))
    }
    return phoneNumberString;
}

function getRoleColor(role){
    if(role === 'Administrator'){
        return '#2081C3';
    }
    else if(role === 'Viewer'){
        return '#7E7E7E';
    }
    else if(role === 'User'){
        return '#68AAAB';
    }
    else{
        return 'black';
    }
}

function formatDateTime(dateTimeString) {
    // convert into mm/dd/yyyy hh:mm am/pm
    var date = new Date(dateTimeString);
    var hours = date.getUTCHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var ampm = hours >= 12 ? 'pm' : 'am';

    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
}

function renderDetail(label, value) {
    return (
        <div className="user-card-body-row">
            <p className='detail-header' style={{ marginBottom: '4px' }}>{label}</p>
            <p className='detail-item' style={{ lineHeight: '1.2', marginTop: '0' }}>{value}</p>
        </div>
    );
}

function UserCard( {name, role, email, address, phone, createdAt, lastLoggedIn}) {
    return (
        <div className="user-card" style={{marginLeft: '12px', marginRight: '12px'}}>
            <Accordion className="user-card-body" style={{marginBottom: '16px'}}>
            <AccordionSummary expandIcon={<img src={expand_more}/>}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                <div style={{ width: '20%',  marginRight: '0px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '50%', fill: getRoleColor(role) }}>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg> 
                </div>
                <div style={{ width: '80%', marginLeft: '0px'}}>
                    <Typography style={{fontWeight: 'semi-bold', fontSize: '12px'}} className='user-name'>{name}</Typography>
                    <Typography style={{fontSize: '10px'}} >{role}</Typography>
                    <Typography style={{fontSize: '10px'}}>{email}</Typography>
                </div>
            </div>
            </AccordionSummary>
            <AccordionDetails style={{ minHeight: '270px' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                <div style={{ width: '20%',  marginRight: '0px'}}></div>
                <div style={{ width: '80%', marginLeft: '0px'}}>
                    {renderDetail('Address', address)}  
                    {renderDetail('Phone', formatPhoneNumber(phone))}
                    {renderDetail('Created At', formatDateTime(createdAt))}
                    {renderDetail('Last Logged In', formatDateTime(lastLoggedIn))}
                </div>
            </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default UserCard;