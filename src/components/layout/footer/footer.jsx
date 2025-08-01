import './footer-style.css';
import { Logo } from '../../ui/logo/logo';
import { Text, TextVariant } from '../../ui/text/text';

export const Footer = () => { 
    return <footer className='footer'>
        <Logo />
        <Text variant={TextVariant.normal}>Создано 2025</Text>
    </footer>
}