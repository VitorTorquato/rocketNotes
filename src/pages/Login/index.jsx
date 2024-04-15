
import {FiMail, FiLock} from 'react-icons/fi';
import { Link} from 'react-router-dom'

import { Input } from '../../components/Input';
import {Button} from '../../components/button'


import { useAuth } from '../../hooks/auth';

import { Container, Form, Background } from './styles';
export function LogIn(){
        
        const data =  useAuth();
        console.log("Meu context " , data)


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
                    placeholder="Senha"
                    type="password"
                       icon={FiLock} 
                />

                <Button title="Entrar"/>

                <Link to="/register">
                    Crie uma nota
                </Link>
            

            </Form>

            <Background/>

        </Container>
    )

};