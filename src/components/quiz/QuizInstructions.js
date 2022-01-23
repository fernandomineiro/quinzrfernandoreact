import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { List, Card, Container,Button,Icon, Header, Divider } from 'semantic-ui-react'
import isEmpty from '../../utils/is-empty';
import Message from './message'

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Instução do game || Fernando Quiz</title>
    </Helmet>
    <Container fluid style={{ textAlign: "center" }}>
      <Card fluid style={{ padding: 40 }}>
        <Header size="large">Quiz Instructions</Header>
        <Card.Content>
          <List bulleted style={{ fontSize: 16 }}>
            <List.Item>Cada jogo é composto por 55 perguntas.</List.Item>
            <List.Item>Cada pergunta tem quatro opções.</List.Item>
            <List.Item>
              Selecione a opção que você acha correta clicando nela.
            </List.Item>
            <List.Item>
              Este Quiz é principalmente para o conhecimento das Marcas e seu
              local de origem.
            </List.Item>
            <List.Item>
              Você não receberá nenhum chocolate ou troféu após completar o
              quiz, nem mesmo um certificado.{" "}
            </List.Item>
            <List.Item>Complete o quiz para obter seus resultados. </List.Item>
            <List.Item>
              Você tem o que é preciso? Vamos descobrir, basta clicar no botão
              play!
            </List.Item>
          </List>
        </Card.Content>
        <Message />
        <Card.Content>
          <Link to="/">
            <Button primary>
              {" "}
              <Icon name="backward" />
              Go back
            </Button>
          </Link>
          <Link to="/play/quiz">
            <Button primary>
              {" "}
              <Icon name="play circle outline" />
              Start Quiz
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </Container>
  </Fragment>
);

export default QuizInstructions;