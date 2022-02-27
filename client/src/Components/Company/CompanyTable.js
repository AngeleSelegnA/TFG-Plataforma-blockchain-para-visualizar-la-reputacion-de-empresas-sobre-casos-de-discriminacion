import React from 'react';
import MaterialTable , { MTableToolbar, MTableFilterRow, MTablePagination } from "material-table";
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import {Grid, Button, Box} from '@material-ui/core';



const columns=[
  { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/>,
  cellStyle: {
      backgroundColor: '#ede7f6',
      color: '#3949ab'
    },
    headerStyle: {
        backgroundColor: '#9fa8da',
      }
   },
  { title: "Tipo de denuncia", field: "tipoDenuncia" ,
  cellStyle: {
    backgroundColor: '#ede7f6',
    color: '#3949ab'
  },
  headerStyle: {
      backgroundColor: '#9fa8da',
    }
  },

  { title: "Fecha", field: "fecha" ,
  cellStyle: {
    backgroundColor: '#ede7f6',
    color: '#3949ab'
  },
  headerStyle: {
      backgroundColor: '#9fa8da',
    }
  },

  { title: "Descripción", field: "desc",
  cellStyle: {
      backgroundColor: '#ede7f6',
      color: '#3949ab'
    },
    headerStyle: {
        backgroundColor: '#9fa8da',
      }
    },

  {title: "Denunciada antes", field: "reported",  type: "bool",
  cellStyle: {
      backgroundColor: '#ede7f6',
      color: '#3949ab'
    },
    headerStyle: {
        backgroundColor: '#9fa8da',
      }
    },
]

const data=[
  {
  tipoDenuncia: "Género",
  fecha: "1/1/2022",
  desc: "Esto será un link",
  reported: true,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/06/20/07/24/color-815547_960_720.png'
  },
  
  {
  tipoDenuncia: "Otro",
  fecha: "3/1/2022",
  desc: "Esto será un link",
  reported: false,
  imageUrl: 'https://www.todofondos.net/wp-content/uploads/fondos-de-colores-fondos-de-pantalla.-fondo-de-pantalla-lisos.jpg'
  },
  {
  tipoDenuncia: "Etnia",
  fecha: "1/2/2022",
  desc: "Esto será un link",
  reported: false,
  imageUrl: 'https://cdn.pixabay.com/photo/2015/06/20/07/24/color-815546_960_720.png'
  },
  {
  tipoDenuncia: "Política",
  fecha: "3/11/2021",
  desc: "Esto será un link",
  reported: true,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhWS9iJ40wlMrZDIazgd8ilESJIB91r08wjN_FLrExTrtrzbUq8dyggaig3u_bobzuxI&usqp=CAU'
  },
  {
    tipoDenuncia: "Etnia",
    fecha: "12/2/2022",
    desc: "Esto será un link",
    reported: true,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/06/20/07/24/color-815546_960_720.png'
    },
  
]

function CompanyTable() {
  return (
    <MaterialTable
                          
      columns = {columns}
      data = {data}
      title = "Lista de denuncias reportadas:"
      colorTitle = '#ede7f6'
      actions = {[
          {
          icon: 'favorite_border',
          tooltip: 'Apoya esta denuncia', 
          onClick: (event, rowData) => window.confirm("¿Deseas apoyar esta denuncia de tipo " + rowData.tipoDenuncia + "?")
          },
      ]}
      components={{
          /* FilterRow: props => (
            <div style={{color: '#A04000', backgroundColor: '#FAD7A0'}}>
               <MTableFilterRow {...props} />
            </div>
           ), */
           FilterRow: (rowProps) => {
            const { columns, onFilterChanged } = rowProps;
  
            return (
              <>
                <tr style={{color: '#A04000', backgroundColor: '#ede7f6'}}>
                  {columns.map((col) => {
                    if (col.field) {
                      return (
                        <td>
                          <input
                            placeholder="filter"
                            id={col.field}
                            onChange={(e) => {
                              console.log(e.target.id, e.target.value);
                              onFilterChanged(col.tableData.id, e.target.value);
                            }}
                          />
                        </td>
                      );
                    }
                  })}
                </tr>
              </>
            );
          },
          Action: props => (
            
            <Button
              style={{color: '#A04000', backgroundColor: '#ede7f6'}}
              onClick={(event) => props.action.onClick(event, props.data)}
              color="primary"
              variant="contained"
              style={{textTransform: 'none'}}
              size="small"
            >
              Apoyar
            </Button>
          ),
          Toolbar: props => (
            <div style={{color: 'white', backgroundColor: '#c5cae9'}}>
               <MTableToolbar {...props} />
            </div>
          ),
           Pagination: props => (
            <div style={{color: '#A04000', backgroundColor: '#c5cae9'}}>
               <MTablePagination {...props} />
            </div>
          ),
         
        }}
      options ={{
          actionsColumnIndex: -1,
   
          headerStyle: {
              width: 26,
              whiteSpace: 'nowrap',
              textAlign: 'left',
              flexDirection: 'row',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              paddingLeft: 5,
              paddingRight: 5,
              backgroundColor: '#9fa8da',
              fontWeight: 'bold',
              color: '#FFF'
          },
          sorting: true,
          filtering: true,
          search: true,
      }}
      localization = {{
          header: {
              actions: "Apoyar"
              
          },
          
          
      }}
      icons={{
        Filter: () => <FilterListIcon style={{ color: "3949ab" }} />,
        Search: () => <SearchIcon style={{ color: "white" }} />,
        ResetSearch: () => <Clear style={{ color: "white" }} />,
        FirstPage: () => <FirstPageIcon style={{ color: "blue" }} />,
        LastPage: () => <LastPageIcon style={{ color: "blue" }} />,
        ArrowBack: () => <ArrowBackIcon style={{ color: "blue" }} />,
        ArrowForward: () => <ArrowForwardIcon style={{ color: "blue" }} />,
        PreviousPage: () => <ChevronLeftIcon style={{ color: "blue" }} />,
        NextPage: () => <ChevronRightIcon style={{ color: "blue" }} />,
        SortArrow: () => <ArrowDownward style={{ color: "white" }}/>,
      }}
  />
  );
}

export default CompanyTable