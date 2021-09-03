import { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

const ProgramListResults = ({ programs, ...rest }) => {
  const [selectedProgramIds, setSelectedProgramIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedProgramIds;

    if (event.target.checked) {
      newSelectedProgramIds = programs.map((program) => program.id);
    } else {
      newSelectedProgramIds = [];
    }

    setSelectedProgramIds(newSelectedProgramIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProgramIds.indexOf(id);
    let newSelectedProgramIds = [];

    if (selectedIndex === -1) {
      newSelectedProgramIds = newSelectedProgramIds.concat(selectedProgramIds, id);
    } else if (selectedIndex === 0) {
      newSelectedProgramIds = newSelectedProgramIds.concat(selectedProgramIds.slice(1));
    } else if (selectedIndex === selectedProgramIds.length - 1) {
      newSelectedProgramIds = newSelectedProgramIds.concat(selectedProgramIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProgramIds = newSelectedProgramIds.concat(
        selectedProgramIds.slice(0, selectedIndex),
        selectedProgramIds.slice(selectedIndex + 1)
      );
    }

    setSelectedProgramIds(newSelectedProgramIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedProgramIds.length === programs.length}
                    color="primary"
                    indeterminate={
                      selectedProgramIds.length > 0
                      && selectedProgramIds.length < programs.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Program NO.
                </TableCell>
                <TableCell>
                  Version
                </TableCell>
                <TableCell>
                  Model NO.
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programs.slice(0, limit).map((program) => (
                <TableRow
                  hover
                  key={program.id}
                  selected={selectedProgramIds.indexOf(program.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedProgramIds.indexOf(program.id) !== -1}
                      onChange={(event) => handleSelectOne(event, program.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {program.programno}
                  </TableCell>
                  <TableCell>
                    {program.version}
                  </TableCell>
                  <TableCell>
                    {program.modelno}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={programs.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ProgramListResults.propTypes = {
  programs: PropTypes.array.isRequired
};

export default ProgramListResults;
