import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../hooks/theme";
// import { mockDataInvoices } from "../../data/mockData";
import { Header } from '../../components'

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.blueAccent[100]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div></div>
    // <Box>
    //   <Header title="INVOICES" subtitle="List of Invoice Balances" />
    //   <Box
    //     m="40px 0 0 0"
    //     height="70vh"
    //     sx={{
    //       "& .MuiDataGrid-root": {
    //         border: "none",
    //       },
    //       "& .MuiDataGrid-cell": {
    //         borderBottom: "none",
    //       },
    //       "& .MuiDataGrid-columnHeaders": {
    //         backgroundColor: colors.blueAccent[200],
    //         borderBottom: "none",
    //       },
    //       "& .MuiDataGrid-virtualScroller": {
    //         backgroundColor: colors.primary[400],
    //       },
    //       "& .MuiDataGrid-footerContainer": {
    //         borderTop: "none",
    //         backgroundColor: colors.blueAccent[200],
    //       },
    //       "& .MuiCheckbox-root": {
    //         color: `${colors.blueAccent[100]} !important`,
    //       },
    //       '& .MuiDataGrid-iconSeparator': {
    //         display: 'none'
    //       },
    //       '& .MuiDataGrid-menuIcon': {
    //         marginRight: '0px'
    //       },
    //       boxShadow: 1
    //     }}
    //   >
    //     <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
    //   </Box>
    // </Box>
  );
}

export default Invoices