import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../hooks/theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Header } from '../../components'
import axios from "axios"
import { useState, useEffect } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/user/get').then((response) =>{
      setAdmin(response.data.map((user) => ({
        id: user._id,
        name: user.name,
        pseudo: user.pseudo,
        email: user.email,
        role: user.role,
      })));
    })
  }, [])

console.log(admin);
const filteredAdmins = admin.filter(user => user.role === "user");

  const columns = [
    { field: "id", headerName: "Identifiant", flex:1 },
    {
      field: "name",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "pseudo",
      headerName: "Pseudo",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "user"
                ? colors.greenAccent[600]
                : role === "user"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {/* {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />} */}
            {role === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[200],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[200],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.blueAccent[100]} !important`,
          },
          '& .MuiDataGrid-iconSeparator': {
            display: 'none'
          },
          '& .MuiDataGrid-menuIcon': {
            marginRight: '0px'
          },
          '& .MuiDataGrid-row .MuiDataGrid-withBorderColor': {
            borderBottom: `1px solid ${colors.line}` 
          },
          boxShadow: 1
        }}
      >
        <DataGrid checkboxSelection rows={filteredAdmins} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team