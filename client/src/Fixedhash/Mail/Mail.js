import * as React from "react";
import "./Mail.css";
import { Link } from "react-router-dom";
import { getuser } from "../../JS/Actions/listuser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../Sidebar/Sidebar";
import Navig from "../Navigation/Navig";

function Mail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
  }, []);
  const users = useSelector((state) => state.userlistReducer.userList);
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContaineruser">
          <Navig />
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                  {/* <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  ? users.map((el) => (
                      <TableRow>
                        <TableCell className="tableCell">{el.email}</TableCell>
                        <TableCell className="tableCell">
                          <div className="buttonactionuser">
                            <button className="btnact success">
                              {" "}
                            send a message
                            </button>
                          </div>
                        </TableCell>
                        {/* <TableCell className="tableCell"></TableCell> */}
                        <TableCell className="tableCell">
                          {/* <span className={`status ${row.status}`}>
                        {row.status}
                      </span> */}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Mail;
