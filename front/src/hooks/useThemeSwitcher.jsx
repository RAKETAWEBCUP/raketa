import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = '(prefer-color-scheme: dark)';
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQwery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem('theme');

        const handleChange = () => {
            if(userPref) {
                let check = userPref === 'dark' ? 'dark' : 'light';
                setMode(check);
                if(check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            } else {
                let check = mediaQwery.matches ? 'dark' : 'light';
                setMode(check);

                if(check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }

        handleChange();

        mediaQwery.addEventListener('change', handleChange);

        return () => mediaQwery.removeEventListener('change', handleChange);

    }, [])

    useEffect(() => {
        if(mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark')
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark')
        }
    }, [mode])
    

  return [mode , setMode]
}

export default useThemeSwitcher