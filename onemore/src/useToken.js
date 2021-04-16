import {useState} from 'react';

export default function useToken() {

    const getToken = () =>
    {
        const userToken = JSON.parse(sessionStorage.getItem( 'xtoken' ));
        return userToken?.token;
    }
    const [token, setToken] = useState(getToken()) ;

    const saveToken = (u)  =>
    {
        sessionStorage.setItem('xtoken', JSON.stringify(u));
        alert(JSON.stringify(u));
        setToken(u.token);
    }

    return { setToken: saveToken,
        token };

}
