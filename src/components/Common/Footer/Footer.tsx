import './Footer.css';

export const Footer:React.FC = ()=>{
    return (
        <div className="footer">
            <div className="wrap_ft">

                <div className="ft_copy">
                    블라블라 copyright
                </div>

                <div className="ft_menu">
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>이용안내</li>
                        <li>자주 묻는 질문</li>
                    </ul>
                </div>

                <div className="ft_copy2">
                    Copyright by . All rights reserved. Designed by .
                </div>
            </div>
        </div>
    )
}