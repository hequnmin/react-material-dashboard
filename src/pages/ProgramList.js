import { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProgramListToolbar from '../components/program/ProgramListToolbar';
import ProgramListResults from '../components/program/ProgramListResults';
import programs from '../api/programs';

class ProgramList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Programs | Blueway ATE 2020</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <ProgramListToolbar />
            <Box sx={{ pt: 3 }}>
              <ProgramListResults programs={programs} />
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default ProgramList;
