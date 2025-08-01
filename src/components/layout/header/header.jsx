import './header-style.css';
import { Logo } from '../../ui/logo/logo';
import { Button } from '../../ui/button/button';

export const Header = () => { 
    return <header className='header'>
        <Logo />
        <Button>Купить</Button>
    </header>
}