import React, { useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const TicketTable = ({ tickets }) => {
  const itemsPerPage = 10; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedTickets = [...tickets];
  if (sortField) {
    sortedTickets.sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Pagination logic
  const totalItems = sortedTickets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedTickets.slice(indexOfFirstItem, indexOfLastItem);

  const getSortIndicator = (field) => {
    if (field === sortField) {
      return sortDirection === "asc" ? "↑" : "↓";
    }
    return "";
  };

  const statusVariant = (status) => {
    console.log(`status: `, status);
    switch (status) {
      case "Pending":
        return "secondary";
      case "Accepted":
        return "primary";
      case "Resolved":
        return "success";
      case "Rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div className="table-responsive">
      <Table striped hover>
        <thead>
          <tr>
            <th>Status</th>
            <th
              onClick={() => handleSort("createdTimestamp")}
              style={{ cursor: "pointer" }}
            >
              Created Timestamp {getSortIndicator("createdTimestamp")}
            </th>
            <th>Title</th>
            <th>Description</th>
            <th>Contact Information</th>
            <th
              onClick={() => handleSort("latestUpdateTimestamp")}
              style={{ cursor: "pointer" }}
            >
              Latest Update Timestamp{" "}
              {getSortIndicator("latestUpdateTimestamp")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((ticket) => (
            <tr key={ticket.id}>
              <td>
                <Badge bg={statusVariant(ticket.status)}>{ticket.status}</Badge>
              </td>
              <td>{ticket.createdTimestamp}</td>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.contact}</td>
              <td>{ticket.latestUpdateTimestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  );
};

export default TicketTable;
