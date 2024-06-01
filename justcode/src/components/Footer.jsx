const Footer = ({commentsUrl, currentUserId}) => {

    return (
        <footer style={{backgroundColor: '#131313', width: '100%'}}>
            <div className="_container" style={{padding: '24px 0'}}>
                <h3 style={{color: '#fff', marginBottom: '16px'}}>Контакты</h3>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        iliasabaialefhgs@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">call</span>
                        iliasabaialefhgs@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        iliasabaialefhgs@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        iliasabaialefhgs@gmail.com
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
