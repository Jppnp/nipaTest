import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import { Col, Form, Row } from "react-bootstrap";
import TicketTable from "./TicketTable"; // Double-check the import path for DataCard

export default function Main() {
  const ticketsData = [
    {
      id: 1,
      title: "Card 1",
      description: "Description 1",
      contact: "Contact 1",
      createdTimestamp: "2023-07-24 12:34:56",
      latestUpdateTimestamp: "2023-07-24 15:45:00",
      status: "Pending",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description 2",
      contact: "Contact 2",
      createdTimestamp: "2023-07-22 09:15:30",
      latestUpdateTimestamp: "2023-07-23 18:30:00",
      status: "Resolved",
    },
    // Add more data as needed
  ];
  const [tickets, setTickets] = useState(ticketsData);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterChange = (status) => {
    setFilterStatus(status);

    if (status === "all") {
      setTickets(ticketsData);
    } else {
      const filteredTickets = ticketsData.filter(
        (ticket) => ticket.status === status
      );
      setTickets(filteredTickets);
    }
  };

  return (
    <div>
      <Header />
      <div style={{padding: '1rem'}}>
        <Form>
          <div style={{ marginBottom: "1rem", width: "50%" }}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Filter by
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  value={filterStatus}
                  onChange={(e) => handleFilterChange(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Rejected">Rejected</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </div>
        </Form>
        <TicketTable tickets={tickets} />
      </div>
    </div>
  );
}
