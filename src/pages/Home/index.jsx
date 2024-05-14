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

    const [search,setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);




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

    } , []);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);

            setNotes(response.data);
        }

        fetchNotes();

    }, [ tagsSelected, search]);

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
            <Input 
            placeholder="Pesquisar pelo titulo"
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
            />
        </Search>

        <Content>
            <Section title="Minhas notas">  
                {
                    notes.map(note => (
                        <Note
                            key={note.id}
                            data={note}

                        />

                    ))

                }
            
            </Section>
        </Content>

        <NewNote to="/new">
            <FiPlus/>
            Criar Nota
        </NewNote>
        </Container>
    )
}