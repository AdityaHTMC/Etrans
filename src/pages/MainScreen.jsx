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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { Margin } from '@mui/icons-material';

const MainScreen = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>

          {/* header part work start */}
          <Grid className='mb10' container>
            <h2 className='m0'>Pending Invoice</h2>
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
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>1</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>2</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>3</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>4</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>5</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>6</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>7</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>8</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>9</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>10</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>12</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>13</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>14</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>15</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>16</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>17</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                  {/* item start */}
                  <TableRow hover>
                    <TableCell>18</TableCell>
                    <TableCell>#TCDIGDUR00000001</TableCell>
                    <TableCell>08 May 2024</TableCell>
                    <TableCell>Example</TableCell>
                    <TableCell>3599</TableCell>
                    <TableCell><Checkbox /></TableCell>
                  </TableRow>
                  {/* item end */}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack className='rightPagination mt10' spacing={2}>
              <Grid container spacing={1}>
                <Grid item xs={6} md={6}></Grid>
                <Grid className='text-right' item xs={2} md={2}>
                  <b>Sub Total :</b>
                </Grid>
                <Grid align='center' item xs={2} md={2}>
                  <b><CurrencyRupeeIcon style={{ marginBottom: '-5px' }} /> <span style={{ fontSize: '20px' }}>3599</span></b>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Button href="/ClearInvoice" color="success" variant="contained" endIcon={<SendIcon />} style={{ width: '100%' }}>Proceed to Pay</Button>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
          {/* table work end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  )
}

export default MainScreen