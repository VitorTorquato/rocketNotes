import { Container, Form } from "./styles";
import { Link } from 'react-router-dom'


import { Header } from '../../components/header'
import { Input } from '../../components/Input'
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from '../../components/Sectionn';
import { Button } from "../../components/button";


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                    />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />

                        <NoteItem isNew placeholder="Novo link" />

                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Nova tag" />
                        </div>
                        <Button title="Salvar" />
                    </Section>
                </Form>

            </main>
        </Container>
    )

};