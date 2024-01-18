import Report from "../models/ReportModel.js";

export const postReport = (req, res) => {
  const info = req.body;

  const newReport = new Report({
    date: info.date,
    location: info.location,
    reportAuthor: info.author,
    reportContent: info.content,
    reportTitle: info.title,
  });

  newReport.save();

  res.json({ message: "success", status: 200 });
};

export const getReport = async (req, res) => {
  const info = req.body;
  const data = await Report.find({ location: info.location });
  console.log(data);
  res.json(data);
};
