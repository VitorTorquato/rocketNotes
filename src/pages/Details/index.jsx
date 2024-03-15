import {Container , Links , Content} from './styles';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Section } from '../../components/Sectionn';
import { Tag } from '../../components/tags';
import { ButtonText } from '../../components/ButtonText';



export function Details(){
  

  return(
    <Container>
      <Header/>
      <main>
        <Content>
     
      <ButtonText title="Excluir nota" />

      <h1>
        Intordução ao React
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat temporibus quasi neque facilis quae aspernatur quisquam sapiente ratione, magnam vitae assumenda reprehenderit repellat quo vero quibusdam quis tempore quam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat temporibus quasi neque facilis quae aspernatur quisquam sapiente ratione, magnam vitae assumenda vitae.
      </p>

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

          <Section title="Marcadores">
            <Tag title="Express"/>
           <Tag title="Node.js"/>
          </Section>

        <Button title="voltar"/>
       </Content>
      </main>
    </Container>
  )
}