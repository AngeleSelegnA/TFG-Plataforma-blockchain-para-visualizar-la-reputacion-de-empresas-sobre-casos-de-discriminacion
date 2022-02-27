import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination, Typography
} from "@material-ui/core";
import StatusBullet from "./StatusBullet";
import theme from "../../themes/theme";
const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  },
  content: {
    padding: 0
  },
  head: {
    backgroundColor: theme.backgroundColor
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  status: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  },
}));
const statusColors = {
  completed: "success",
  processing: "info",
  shipped: "danger"
};
const TableComponent = props => {
const classes = useStyles();
const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
const tableHeaders = [
    {
      text: "Order id",
      value: "Orders.id"
    },
    {
      text: "Orders size",
      value: "Orders.size"
    },
    {
      text: "Full Name",
      value: "Users.fullName"
    },
    {
      text: "User city",
      value: "Users.city"
    },
    {
      text: "Order price",
      value: "Orders.price"
    },
    {
      text: "Status",
      value: "Orders.status"
    },
    {
      text: "Created at",
      value: "Orders.createdAt"
    }
  ];
  
  

return (
      <Card
        padding={"0"}
  
      >
        <CardContent className={classes.content}>
            <div className={classes.inner}>
              <Table>
                <TableHead className={classes.head}>
                  <TableRow>
                    {tableHeaders.map((item) => (
                      <TableCell key={item.value + Math.random()} 
                 className={classes.hoverable}           
                      >
                        <span>{item.text}</span>
              
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={["Orders.id"]}
                    >
                      <TableCell>
                        {["Orders.id"]}
                      </TableCell>
                      <TableCell>
                        {["Orders.size"]}
                      </TableCell>
                      <TableCell>
                        {["Users.fullName"]}
                      </TableCell>
                      <TableCell>
                        {["Users.city"]}
                      </TableCell>
                      <TableCell>
                        {"$ " + ["Orders.price"]}
                      </TableCell>
                      <TableCell>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors[["Orders.status"]]}
                          size="sm"
                        />
                        {["Orders.status"]}
                      </TableCell>
                      <TableCell>
                      </TableCell>
                    </TableRow>
                
                </TableBody>
              </Table>
            </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </CardActions>
      </Card>
    );
  
};
TableComponent.propTypes = {
  className: PropTypes.string,
  query: PropTypes.object.isRequired
};
export default TableComponent;