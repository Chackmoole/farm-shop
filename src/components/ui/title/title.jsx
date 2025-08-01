import './title-style.css';

export const TitleVariants = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4'
}

export const Title = ({ children, variant, className = '' }) => { 
    let component;
    switch (variant) { 
        case 'h1': component = <h1 className={`title ${className}`}>{children}</h1>;
            break;
        case 'h2': component = <h2 className={`title title--h2 ${className}`}>{children}</h2>;
            break;
        case 'h3': component = <h3 className={`title title--h3 ${className}`}>{children}</h3>;
            break;
        case 'h4': component = <h4 className={`title title--h4 ${className}`}>{children}</h4>;
            break;
        default: component = <h2 className={`title title--h2 ${className}`}>{children}</h2>;
    }
    return component
} 