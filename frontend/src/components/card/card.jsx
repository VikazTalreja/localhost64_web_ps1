import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CardDefault() {
  const [jsonData, setJsonData] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState("Most_famous");

  useEffect(() => {
    // Replace 'your-json-api-url' with the actual URL of your JSON data
    fetch("./carddata.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!jsonData) {
    return <div>Loading...</div>;
  }
  const filteredCards = jsonData.filter(
    (card) => card.category === filteredCategory
  );
  return (
    <div>
      <div>
        <label htmlFor="categoryFilter">Select Category:</label>
        <select
          id="categoryFilter"
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
        >
          <option value="Most_famous">Most Famous</option>
          <option value="Best_places">Best Places</option>
          <option value="Near_me">Near Me</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {filteredCards.map((card, index) => (
        <Card key={index} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={card.imageUrl} alt={`Card header ${index + 1}`} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {card.title}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
