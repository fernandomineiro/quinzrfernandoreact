import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { List, Card, Container,Button,Icon, Header } from 'semantic-ui-react'
class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30) {
          remark = "Você precisa de mais prática!";
        } else if (userScore > 30 && userScore <= 50) {
          remark = "Mais sorte da próxima vez!";
        } else if (userScore <= 70 && userScore > 50) {
          remark = "Você pode fazer melhor!";
        } else if (userScore >= 71 && userScore <= 84) {
          remark = "Você foi ótimo!";
        } else {
          remark = "Você é um gênio absoluto!";
        }

        if (state !== undefined) {
          stats = (
            <Fragment>
              <Header size="huge">Seu tempo acabou!</Header>

              <div className="container stats">
                <Header size="medium">{remark}</Header>
                <Header size="medium">
                  Sua pontuação: {this.state.score.toFixed(0)}&#37;
                </Header>
                <div>
                  <p>Total de perguntas: {this.state.numberOfQuestions} </p>

                  <p>
                    Tentativas de perguntas:{" "}
                    {this.state.numberOfAnsweredQuestions}{" "}
                  </p>

                  <p>
                    Número de respostas corretas: {this.state.correctAnswers}
                  </p>

                  <p>Número de respostas erradas: {this.state.wrongAnswers}</p>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <Link to="/play/quiz">
                  <Button primary style={{ marginTop: 20 }}>
                    {" "}
                    <Icon name="redo" />
                    Jogar de novo
                  </Button>
                </Link>

                <Link to="/">
                  <Button primary style={{ marginTop: 20 }}>
                    {" "}
                    <Icon name="backward" />
                    Voltar
                  </Button>
                </Link>
              </div>
            </Fragment>
          );
        } else {
          stats = (
            <section>
              <Header size="huge">Nenhuma estatística disponível!</Header>
              <Link to="/play/quiz">
                <Button primary style={{ marginTop: 20 }}>
                  {" "}
                  <Icon name="play circle outline" />
                  Faça o teste!
                </Button>
              </Link>
              <Link to="/">
                <Button primary style={{ marginTop: 20 }}>
                  {" "}
                  <Icon name="backward" />
                  Voltar
                </Button>
              </Link>
            </section>
          );
        }
        return (
            <Fragment>
                <Helmet><title>Brand Quiz || Summary</title></Helmet>
                <Container fluid style={{textAlign:"center"}}>
                <Card fluid style={{padding:40}}>
               
                <Card.Content>
                <div>
                {stats}
                </div>
                </Card.Content>
                </Card>
                </Container>
            </Fragment>
        );
    }
}

export default QuizSummary;