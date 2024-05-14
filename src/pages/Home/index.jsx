import { useState , useEffect } from "react";

import { Container, Brand, Menu, Search, Content , NewNote } from "./styles";

import { api } from "../../Services/api";

import { FiPlus, FiSearch} from 'react-icons/fi'
import { Header } from '../../components/header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from "../../components/Sectionn";
import { Note } from "../../components/Notes";
import { Input } from "../../components/Input";

export function Home(){

    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);


    function handleTagsSelected(tagName){

        const alredySelected = tagsSelected.includes(tagName);

        if(alredySelected){
            const filterTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filterTags)
        }else{
            setTagsSelected(prevState => [...prevState,tagName])
        }


   
    }

    
    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data)
        }

        fetchTags();

    } , [])

    return(
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header/>

        <Menu>
                 <li>
                    <ButtonText 
                    title="Todos" 
                    onClick={() => handleTagsSelected("all")}
                    isActive={tagsSelected.length === 0}
                    />
                </li>
            {
            
            tags && tags.map( tag => (

                <li
                    key={String(tag.id)}
                >
                    <ButtonText 
                    title={tag.name}
                    onClick={() => handleTagsSelected(tag.name)}
                    isActive={tagsSelected.includes(tag.name)} 
                     />
                </li>

            ))
                
                
            }
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

        <NewNote to="/new">
            <FiPlus/>
            Criar Nota
        </NewNote>
        </Container>
    )
}