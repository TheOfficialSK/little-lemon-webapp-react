import React from 'react';
import logo from './assets/Logo.svg';
import Nav from './Nav';
import './styles/Footer.css';

function Footer() {
    return (
        <footer>
            <img
                className={'header-logo'}
                src={logo}
                alt='Little Lemon Logo'
                width={'200px'}
                height={'96px'}
            />
            <Nav
                section={'bottom-bar'}
                title={'Doormat Navigation'}
                links={[
                    { anchor: 'CallToAction', label: 'Home' },
                    { anchor: 'Chicago', label: 'About' },
                    { anchor: 'BookingPage', label: 'Reservations' },
                    { anchor: '??', label: 'Order Online' },
                    { anchor: '??', label: 'Login' },
                ]}
            />
            <Nav
                section={'bottom-bar'}
                title={'Contact'}
                links={[
                    { label: 'Address', href: 'https://www.google.com/' },
                    { label: 'Phone number', href: 'https://www.google.com/' },
                    { label: 'email', href: 'https://www.google.com/' },
                ]}
            />
            <Nav
                section={'bottom-bar'}
                title={'Social Media'}
                links={[
                    { label: 'Address', href: 'https://www.google.com/' },
                    { label: 'Phone number', href: 'https://www.google.com/' },
                    { label: 'email', href: 'https://www.google.com/' },
                ]}
            />
        </footer>
    );
}

export default Footer;
