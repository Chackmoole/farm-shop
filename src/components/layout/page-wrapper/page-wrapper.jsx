import './page-wrapper-style.css';

export const PageWrapper = ({ children, className = '' }) => { 
    return <div className={`page-wrapper ${className}`}>{ children }</div>
};