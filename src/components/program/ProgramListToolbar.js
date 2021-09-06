import React, { Component } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

class ProgramListToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box {...this.props} sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{ startAdornment: (<InputAdornment position="start"><SvgIcon fontSize="small" color="action"><SearchIcon /></SvgIcon></InputAdornment>) }}
                placeholder="Search Program"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default ProgramListToolbar;
