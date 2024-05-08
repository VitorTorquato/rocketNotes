
import { RiShutDownLine } from 'react-icons/ri'
import { Container , Profile  , Logout} from './styles'

import {useAuth} from '../../hooks/auth'

export function Header(){

    const { signOut } = useAuth();

    return(
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/vitortorquato.png" 
                alt="Photo of Vitor Torquato" 
                />

                <div>
                    <span>Welcome</span>
                    <strong>Vitor Torquato</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}