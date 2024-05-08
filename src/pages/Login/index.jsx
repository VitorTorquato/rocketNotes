import { useState } from 'react';
import {FiMail, FiLock} from 'react-icons/fi';
import { Link} from 'react-router-dom'

import { Input } from '../../components/Input';
import {Button} from '../../components/button'


import { useAuth } from '../../hooks/auth';

import { Container, Form, Background } from './styles';


export function LogIn(){
        const [email , setEmail] = useState("")
        const [password , setPassword] = useState("")


        const { signIn } =  useAuth();


        function handelSignIn(){
            signIn({email,password})

        }


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
                       onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                       icon={FiLock} 
                       onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handelSignIn}/>

                <Link to="/register">
                    Crie uma nota
                </Link>
            

            </Form>

            <Background/>

        </Container>
    )

};