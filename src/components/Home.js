import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, Icon, Button, Container, Header } from 'semantic-ui-react'
const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home || Fernando Quiz</title>
    </Helmet>
    <Container fluid style={{ textAlign: "center" }}>
      <Card centered fluid style={{ padding: 70 }}>
        <Card.Content>
          <Header size="huge" style={{ fontSize: 40 }}>
            Fernando Quiz
          </Header>
          <Header.Subheader>
            <h6>Teste o conhecimento da sua marca!</h6>
          </Header.Subheader>
        </Card.Content>
        <Card.Content>
          <Link to="/play/instructions">
            <Button primary>
              {" "}
              <Icon name="book" />
              Instruções
            </Button>
          </Link>
          <Link to="/play/quiz">
            <Button primary style={{ marginTop: 10 }}>
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

export default Home;