import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
const ClearInvoice = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          
          {/* Alert message start */}
          <Alert className='mt20 mb20 text18' severity="success">Out of 18 Invoice, 3 were settled and 15 are pending</Alert>
          {/* Alert message end */}

          {/* header part work start */}
          <Grid className='mb10' container>
            <h2 className='m0'>Clear Invoice</h2>
          </Grid>
          {/* header part work end */}

          {/* table work start here */}
          <Paper className='customTable' sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 390 }}>
              <Table stickyHeader aria-label="sticky">
                <TableHead>
                  <TableRow>
                    <TableCell>SL. NO.</TableCell>
                    <TableCell>Invoice ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Particular</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>1</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>2</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>3</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>4</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>5</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>6</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>7</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>8</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>9</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>10</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>11</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>12</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>13</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>14</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>15</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {/* table work end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  )
}
export default ClearInvoice