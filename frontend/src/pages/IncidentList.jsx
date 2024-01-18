
import React, { useState } from 'react';




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
    // Additional dummy incidents
    {
      id: 4,
      type: 'Vandalism',
      location: 'Broadway',
      date: '2022-03-10',
      time: '14:20',
      description: 'Graffiti on public property.',
    },
    {
      id: 5,
      type: 'Assault',
      location: 'Oak Street',
      date: '2022-03-09',
      time: '21:15',
      description: 'Physical altercation between two individuals.',
    },
    {
      id: 6,
      type: 'Robbery',
      location: 'Market Square',
      date: '2022-03-08',
      time: '17:30',
      description: 'Armed robbery reported at a convenience store.',
    },
    {
      id: 7,
      type: 'Suspicious Activity',
      location: 'Civic Center',
      date: '2022-03-07',
      time: '11:00',
      description: 'Unusual behavior reported by witnesses.',
    },
    {
      id: 8,
      type: 'Accident',
      location: 'Highway 101',
      date: '2022-03-06',
      time: '13:45',
      description: 'Multiple vehicle collision on the highway.',
    },
    {
      id: 9,
      type: 'Lost Property',
      location: 'Shopping Mall',
      date: '2022-03-05',
      time: '16:00',
      description: 'Report of lost items at the shopping mall.',
    },
    {
      id: 10,
      type: 'Burglary',
      location: 'Residential Area',
      date: '2022-03-04',
      time: '19:20',
      description: 'Break-in reported at a residential property.',
    },
    // Add more dummy incidents as needed
  ]);

  const [sortByDate, setSortByDate] = useState(false);

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
      </div>
      <ul>
        {incidents.map((incident) => (
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
