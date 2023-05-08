import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../hooks/theme";
import { Header } from '../../components'
import { useTheme } from "@mui/material";
import { useEffect , useState} from "react";
import axios from 'axios'

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [utilisateur, setUtilisateur] = useState([])


  useEffect(() => {
    axios.get('https://raketa.madagascar.webcup.hodi.host/user/get').then((response) =>{
      setUtilisateur(response.data.map((user) => ({
        id: user._id,
        name: user.name,
        pseudo: user.pseudo,
        email: user.email,
      })));
    })
  }, [])
  const columns = [
    { field: "id", headerName: "Identifiant", flex: 0.25 },
    {
      field: "name",
      headerName: "Nom",
      flex: 0.25,
      cellClassName: "name-column--cell",
    },
    {
      field: "pseudo",
      headerName: "Pseudo",
      flex: 0.25,
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.25,
      type: "text",
      headerAlign: "left",
      align: "left",
    }

  ];

  return (
    <Box>
      <Header
        title="Dreamers"
        subtitle="Liste des utilisateurs de Raketa Issue"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          '& .MuiDataGrid-iconSeparator': {
            display: 'none'
          },
          '& .MuiDataGrid-menuIcon': {
            marginRight: '0px'
          },
          boxShadow: 1
        }}
      >
        <DataGrid
          rows={utilisateur}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default Contacts