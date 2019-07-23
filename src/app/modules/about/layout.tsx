import React from 'react';
import { Page } from 'app/modules/common/Page';
import { Row, Grid, Col } from 'react-styled-flexboxgrid';
import { Typography, Box } from '@material-ui/core';

export const AboutLayout = () => {
  return (
    <Page title="About">
      <Grid>
        <Row>
          <Col lg={7}>
            <Typography variant="h6">What is the Grand Bargain?</Typography>
          </Col>
        </Row>
        <Box height="16px" />
        <Row>
          <Col lg={8}>
            <Typography variant="body1">
              The ‘Grand Bargain’ is an agreement made by humanitarian donors
              and aid organisations to improve the effectiveness and efficiency
              of humanitarian action in order to get more means into the hands
              of people in need. It sets out 51 commitments, organised by
              thematic workstream areas: transparency; greater funding for local
              and national response; cash-based programming; reduced management
              costs; joint needs assessments; participation revolution; quality
              funding (earmarking and multiyear); and harmonising and
              simplifying reporting requirements. Enhancing engagement between
              humanitarian and development actors is an additional cross-cutting
              theme. The Grand Bargain was officially launched at the World
              Humanitarian Summit in May 2016. As at July 2019, there are 90
              signatory organisations. Progress on the Grand Bargain is
              monitored by the Humanitarian Policy Group (HPG/ODI). HPG/ODI work
              on behalf of the Grand Bargain Facilitation Group to produce
              annual independent reviews of progress made against the
              commitments. Progress is measured through interviews and
              self-reports (see terms of reference at the back of the third
              annual independent review for details).
            </Typography>
          </Col>
        </Row>
      </Grid>
      <Box height="50px" />
      <Grid>
        <Row>
          <Col lg={8}>
            <Typography variant="subtitle1">
              What is the Grand Bargain transparency commitment?
            </Typography>
          </Col>
        </Row>
        <Box height="16px" />
        <Row>
          <Col lg={8}>
            <Typography variant="body1">
              There are four parts to the transparency commitment. Signatories
              agreed to:
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <ul>
              <li>
                <Typography variant="body1">
                  1. Publish timely, transparent, harmonised and open
                  high-quality data on humanitarian funding within two years of
                  the World Humanitarian Summit in Istanbul. [IATI was
                  considered to provide a basis for the purpose of a common
                  standard.]
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  2. Make use of appropriate data analysis, explaining the
                  distinctiveness of activities, organisations, environments and
                  circumstances (for example, protection, conflict-zones).
                  [Taken to mean the data published via IATI.]
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  3. Improve the digital platform [ taken to mean a ‘system of
                  systems’] and engage with the open-data standard community to
                  help ensure:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      - accountability of donors and responders with open data
                      for retrieval and analysis;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      - improvements in decision-making, based upon the best
                      possible information;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      - a reduced workload over time as a result of donors
                      accepting common standard data for some reporting
                      purposes;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      - traceability of donor funding throughout the transaction
                      chain as far as the final responders and, where feasible,
                      affected people.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="body1">
                  4. Support the capacity of all partners to access and publish
                  data.
                </Typography>
              </li>
            </ul>
          </Col>
        </Row>
        <Box height="20px" />
        <Row>
          <Col lg={8}>
            <Typography>
              Each of the Grand Bargain thematic areas (‘workstreams’) has a
              core commitment, corresponding indicators and target results.
              Development Initiatives monitors progress against the transparency
              core commitments as part of its programme of work to support the
              workstream co-convenors—the Netherlands Ministry of Foreign
              Affairs and the World Bank Group.
            </Typography>
          </Col>
        </Row>
        <Box height="50px" />
        <Row>
          <Col>[button:more info]</Col>
        </Row>
        <Box height="50px" />
        <Row>
          <Col>
            <Typography variant="h6">
              What is IATI and why is it part of the transparency commitment?
            </Typography>
          </Col>
        </Row>
        <Box height="16px" />
        <Row>
          <Col lg={8}>
            <Typography variant="body1">
              Launched in 2008, the International Aid Transparency Initiative
              (IATI) is a multi-stakeholder initiative and an international open
              data standard that aims to improve the transparency and openness
              of both development and humanitarian activities. IATI provides a
              mechanism for the regular, automated publication of open data on
              financial flows and also enables organisations to publish
              information on their project or programming activities, including
              information on monitoring, evaluation and results. When combined
              with different data, such as needs assessments and more contextual
              analysis, this kind of open information has the potential to drive
              better decision-making. IATI aims to standardise and automate the
              exchange of data – it is not a ‘system’ or platform. It does not
              curate data, nor does it provide ‘statistics’, aggregation or
              analysis. It is a format that publishers can save their data to.
              This creates a pool of open data, in machine-readable format, that
              others can contribute to, draw on and use—perhaps most notably via
              visualisations, dashboards, tools and platforms, which will read
              and display the data. The actual content and quality of what is
              available through IATI depends on what publishing organisations
              are able or prepared to contribute. Overall, 1000+ humanitarian
              and development organisations, including government donors,
              multilateral and UN agencies and international and local NGOs
              currently use the IATI Standard to publish information on who
              funds them, where the money goes and the impact or outcome of
              their activities.
            </Typography>
          </Col>
        </Row>
      </Grid>
    </Page>
  );
};
