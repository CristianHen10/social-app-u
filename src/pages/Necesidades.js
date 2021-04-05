import React from "react";
import MainLayout from "../shared/MainLayout";
import { DataGrid } from "@material-ui/data-grid";
import { Toolbar, Button, ButtonGroup, makeStyles } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const useStyles = makeStyles((theme) => ({
    buttonToolbar: {
        marginLeft: "5px",
    },
    buttonAdd: {
        paddingLeft: "0px",
    }
}));

export default function Necesidades() {
    const classes = useStyles();
  return (
    <MainLayout>
      <children>
        <h1>Gestión de necesidades actuales</h1>
        <Toolbar>
          <ButtonGroup
            variant="text"
            color="inherit"
            aria-label="text primary button group"
          >
            <Button startIcon={<AddIcon />} className={classes.buttonAdd}>Crear</Button>
            <Button startIcon={<EditIcon />} className={classes.buttonToolbar}>Editar</Button>
            <Button startIcon={<DeleteIcon />} className={classes.buttonToolbar}>Eliminar</Button>
            <Button startIcon={<FileCopyIcon />} className={classes.buttonToolbar}>Duplicar</Button>
          </ButtonGroup>
        </Toolbar>
        <div style={{ height: "60vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        </div>
      </children>
    </MainLayout>
  );
}
