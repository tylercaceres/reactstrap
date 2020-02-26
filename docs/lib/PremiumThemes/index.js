import React from 'react';
import {
  Card,
  Button,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Jumbotron,
} from 'reactstrap';
import premiumThemes from './premium';

export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
        <p className="lead">
          <img src="/assets/logo.png" alt="" width="110px" />
        </p>
        <h1>Reactstrap Themes &amp; Templates</h1>
        <h4 className="mb-5">
          A collection of free and premium React templates and themes powered by
          Reactstrap
        </h4>
      </Jumbotron>
      {premiumThemes.map(company => (
        <Container key={company.creator.name} className="premium-section">
          <h2 className="font-weight-bold">{company.creator.name}</h2>
          <p className="mb-4">{company.creator.tagLine}</p>
          <Row>
            {company.products.map(product => {
              return (
                <Col md="6" key={product.title}>
                  <Card className="my-3">
                    <CardHeader className="p-3">
                      <h3 className="m-0 h6 font-weight-bold">
                        <a
                          href={`${product.link}?ref=reactstrap.github.io`}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          title="View details"
                        >
                          {product.title}
                        </a>
                      </h3>
                      <p className="mb-0 mt-1 text-muted">{product.tagLine}</p>
                    </CardHeader>
                    <CardBody className="p-3">
                      <a
                        href={`${product.link}?ref=reactstrap.github.io`}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        title="View details"
                      >
                        <img
                          className="rounded img-fluid"
                          src={product.imgUrl}
                          alt=""
                        />
                      </a>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
            {company.products.length % 2 !== 0 && (
              <Col md="6" className="my-3">
                <Card className="h-100 d-flex justify-content-center align-items-center text-muted">
                  <div>More themes will be added soon !</div>
                </Card>
              </Col>
            )}
          </Row>
          <div className="text-center mt-3 mb-5">
            <Button
              tag="a"
              size="lg"
              href={`${company.creator.link}?ref=reactstrap.github.io`}
              color="primary"
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              See more themes from {company.creator.name}
            </Button>
          </div>
        </Container>
      ))}
    </div>
  );
};
