import React, { useState } from "react";

const IncidentList = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      type: "Accident",
      location: "Main Street",
      date: "2022-03-15",
      time: "15:30",
      description: "Car collision at the intersection.",
    },
    {
      id: 2,
      type: "Theft",
      location: "Park Avenue",
      date: "2022-03-14",
      time: "12:45",
      description: "Stolen bike from the park.",
    },
    {
      id: 3,
      type: "Fire",
      location: "City Square",
      date: "2022-03-12",
      time: "18:00",
      description: "Building fire, emergency services on the scene.",
    },
    // Add more dummy incidents as needed
  ]);

  const [sortByDate, setSortByDate] = useState(false);
  const [filterByType, setFilterByType] = useState("");

  const handleSortByDate = () => {
    setSortByDate(!sortByDate);
    // Sort incidents by date based on the current state of sortByDate
    const sortedIncidents = [...incidents].sort((a, b) => {
      const dateA = new Date(a.date + "T" + a.time);
      const dateB = new Date(b.date + "T" + b.time);
      return sortByDate ? dateA - dateB : dateB - dateA;
    });
    setIncidents(sortedIncidents);
  };

  const handleFilterByType = (type) => {
    setFilterByType(type);
  };

  const filteredIncidents = filterByType
    ? incidents.filter((incident) => incident.type === filterByType)
    : incidents;

  return (
    <div>
      <h2>Recent Incidents</h2>
      <div>
        <label>
          Sort by Date:
          <input
            type="checkbox"
            checked={sortByDate}
            onChange={handleSortByDate}
          />
        </label>
        <select
          value={filterByType}
          onChange={(e) => handleFilterByType(e.target.value)}
        >
          <option value="">All Types</option>
          {/* Add unique incident types dynamically from incidents */}
          {[...new Set(incidents.map((incident) => incident.type))].map(
            (type) => (
              <option key={type} value={type}>
                {type}
              </option>
            )
          )}
        </select>
      </div>
      <ul>
        {filteredIncidents.map((incident) => (
          <li key={incident.id}>
            <strong>{incident.type}:</strong> {incident.description} (
            {incident.location} - {incident.date} {incident.time})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentList;
