import { useState, useEffect } from 'react';
import {Container , Links , Content} from './styles';

import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../Services/api';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/Sectionn';
import { Tag } from '../../components/tags';
import { ButtonText } from '../../components/ButtonText';



export function Details(){

  const [data,setData] = useState();

  
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
      navigate('/');
  }


async  function handleRemoveNote(){
    const confirm = window.confirm("Deseja realmente remover essa nota");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate('/')

    }


  }


  useEffect(() => { 
    async function fetchNote(){

      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);


    }

    fetchNote();

  } , [])
  return(
    <Container>
      <Header/>

      {

        data &&
      <main>
        <Content>
     
      <ButtonText 
      title="Excluir nota"
      onClick={handleRemoveNote}
      />

      <h1>
        {data.title}
      </h1>

      <p>
        {data.description}
      </p>
      
      {

        data.links &&
      <Section title="Links úteis">
        <Links>
        {

          data.links.map(link => (
          <li
           key={String(link.id)}>
            
            <a href={link.url} target='_blank'>
              {link.url}
            </a>
          </li>
          ))
          }
        </Links>
      </Section>
      
      }


        {      

          data.tags &&
          <Section title="Marcadores">
            {
              data.tags.map(tag => (  

            <Tag 
            key={tag.id}
            title={tag.name}/>
          ))
            }
          </Section>
         }
        <Button 
        title="voltar"
        onClick={handleBack}
        />
       </Content>
      </main>
      }
    </Container>
  )
}[]