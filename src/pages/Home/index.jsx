import { Container, Brand, Menu, Search, Content , NewNote } from "./styles";

import { FiPlus, FiSearch} from 'react-icons/fi'
import { Header } from '../../components/header';
import { ButtonText } from '../../components/ButtonText';

import { Section } from "../../components/Sectionn";
import { Note } from "../../components/Notes";
import { Input } from "../../components/Input";

export function Home(){

    return(
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header/>

        <Menu>
          
                <li>
                    <ButtonText title="Todos" isActive />
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="Node"/>
                </li>
           
        </Menu>

        <Search>
            <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
        </Search>

        <Content>
            <Section title="Minhas notas">  
                <Note data={{
                    title: 'React',
                    tags:[
                        {id:"1" , name:"react"},
                        {id:"2" , name:"node.js"}
                    ]
                   
                }}/>

            </Section>
        </Content>

        <NewNote>
            <FiPlus/>
            Criar Nota
        </NewNote>
        </Container>
    )
}