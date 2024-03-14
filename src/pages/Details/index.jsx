import {Container , Links} from './styles';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/Sectionn';



export function Details(){
  

  return(
    <Container>
      <Header/>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="h#">https://vitortorquato/vercel.app</a>
          </li>
          <li>
            <a href="h#">https://vitortorquato/vercel.app</a>
          </li>
          
      
          
        </Links>
      </Section>
      <Button title="voltar"/>
    </Container>
  )
}