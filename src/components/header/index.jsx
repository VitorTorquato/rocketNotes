
import { RiShutDownLine } from 'react-icons/ri'
import { Container , Profile  , Logout} from './styles'

import { api } from '../../Services/api';

import {useAuth} from '../../hooks/auth'

export function Header(){

    const { signOut, user } = useAuth();


    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;


    return(
        <Container>
            <Profile to="/profile">
                <img 
                src={avatarURL} 
                alt={user.name}
                />

                <div>
                    <span>Welcome</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}