import {FiMail, FiLock} from 'react-icons/fi';

import { Input } from '../../components/Input';
import {Button} from '../../components/button'



import { Container, Form, Background } from './styles';
export function SignIn(){
    return(
        <Container>

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salver e gerenciar seus links úteis</p>

                <h2>faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                       icon={FiMail} 
                />

                <Input 
                    placeholder="Password"
                    type="password"
                       icon={FiLock} 
                />

                <Button title="Login"/>

                <a href="#">
                    Create note
                </a>
            

            </Form>

            <Background/>

        </Container>
    )

};