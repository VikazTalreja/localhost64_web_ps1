//add preview of photo, location , delete witness button , add description of the incident
// merge both files
import React, { useState } from "react";

const IncidentForm = () => {
  const [incident, setIncident] = useState({
    type: "",
    location: "",
    date: "",
    time: "",
    description: "",
    anonymous: false,
    photos: [], // New feature: Allow users to upload photos
    witnesses: [], // New feature: Record information about witnesses
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setIncident({
      ...incident,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    // New feature: Store uploaded photos in the incident state
    setIncident({
      ...incident,
      photos: [...incident.photos, ...files],
    });
  };

  const handleWitnessInput = (e, index) => {
    const { name, value } = e.target;
    // New feature: Update information about witnesses in the incident state
    const updatedWitnesses = [...incident.witnesses];
    updatedWitnesses[index] = { ...updatedWitnesses[index], [name]: value };
    setIncident({
      ...incident,
      witnesses: updatedWitnesses,
    });
  };

  const handleAddWitness = () => {
    // New feature: Add a new empty witness to the incident state
    setIncident({
      ...incident,
      witnesses: [...incident.witnesses, {}],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit incident details, including photos and witness information
    console.log("Incident Submitted:", incident);
  };

  return (
    <div>
      <h2>Report an Incident</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        <div>
          <label htmlFor="photos">Photos:</label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
          />
        </div>

        {/* New feature: Input fields for witness information */}
        <div>
          <h3>Witnesses</h3>
          {incident.witnesses.map((witness, index) => (
            <div key={index}>
              <label htmlFor={`witnessName${index}`}>Name:</label>
              <input
                type="text"
                id={`witnessName${index}`}
                name={`witnessName${index}`}
                value={witness.name || ""}
                onChange={(e) => handleWitnessInput(e, index)}
              />
              <label htmlFor={`witnessContact${index}`}>Contact:</label>
              <input
                type="text"
                id={`witnessContact${index}`}
                name={`witnessContact${index}`}
                value={witness.contact || ""}
                onChange={(e) => handleWitnessInput(e, index)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddWitness}>
            Add Witness
          </button>
        </div>

        <button type="submit">Submit Incident</button>
      </form>
    </div>
  );
};

export default IncidentForm;
