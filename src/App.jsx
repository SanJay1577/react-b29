import React from "react";
import "./App.css";

const data = [
  {
    batchCompleted: false,
    course: {
      courseKey: "automation_testing_using_python",
      id: "0edbbf9d-fa34-4670-9b28-6616a25ce571",
      name: "Automation testing using python",
    },
    createdAt: 1753355370,
    email: "pat_c_we_e_b14@guvi.in",
    endTime: 1753515000,
    id: "7d7203e7-2895-4533-a683-91609d0ab7e7",
    isAssigned: true,
    language: "English",
    name: "PAT-C-WE-E-B14",
    startTime: 1753504200,
    students: 23,
    type: "WE",
  },
  {
    batchCompleted: false,
    course: {
      courseKey: "digital_marketing",
      id: "27eb61b8-94c8-4b2a-8566-f1ca6fdf8cac",
      name: "Digital marketing",
    },
    createdAt: 1753345601,
    email: "dm_c_we_e_b18@guvi.in",
    endTime: 1753515000,
    id: "5676befe-dc25-4b4a-9d2d-8c8c07312a31",
    isAssigned: true,
    language: "English",
    name: "DM-C-WE-E-B18",
    startTime: 1753504200,
    students: 20,
    type: "WE",
  },
  {
    batchCompleted: false,
    course: {
      courseKey: "full_stack_development",
      id: "7f349c66-481a-4629-8bf0-5b01ed409f04",
      name: "Full stack development",
    },
    createdAt: 1753345300,
    email: "fsd_c_we_e_b32@guvi.in",
    endTime: 1753515000,
    id: "e141e66e-10a4-4abb-820b-9fc047d63e6c",
    isAssigned: true,
    language: "English",
    name: "FSD-C-WE-E-B32",
    startTime: 1753504200,
    students: 42,
    type: "WE",
  },
  {
    batchCompleted: false,
    course: {
      courseKey: "devops",
      id: "5085273b-6a66-4edb-81b8-6ec7ada4cab2",
      name: "Devops",
    },
    createdAt: 1753341482,
    email: "do_c_we_e_b23@guvi.in",
    endTime: 1753515000,
    id: "5f14b4c1-f213-4f9a-add4-e64631bec04e",
    isAssigned: true,
    language: "English",
    name: "DO-C-WE-E-B23",
    startTime: 1753504200,
    students: 35,
    type: "WE",
  },
  {
    batchCompleted: false,
    course: {
      courseKey: "ui/ux",
      id: "acb4ded7-0d96-4f1b-b80f-5f8deefba086",
      name: "UI/UX",
    },
    createdAt: 1753341422,
    email: "uiux_c_we_e_b34@guvi.in",
    endTime: 1753515000,
    id: "381838d0-ef8d-48a3-9424-2aa32a25f0a1",
    isAssigned: true,
    language: "English",
    name: "UIUX-C-WE-E-B34",
    startTime: 1753504200,
    students: 26,
    type: "WE",
  },
  {
    batchCompleted: false,
    course: {
      courseKey: "full_stack_development",
      id: "a18a2d7b-a781-42b8-a062-2360008ab0c5",
      name: "Full stack development",
    },
    createdAt: 1753074803,
    email: "fsd_c_wd_t_b31@guvi.in",
    endTime: 1753198200,
    id: "1a7438fc-54d6-46e0-b178-6e5dfedc2dc2",
    isAssigned: true,
    language: "Tamil",
    name: "FSD-C-WD-T-B31",
    startTime: 1753187400,
    students: 60,
    type: "WD",
  },
];

function App() {
  return (
    <>
      <div className="all-card">
        {data.map((course, idx) => (
          <GuviCard courseDetails={course} />
        ))}
      </div>
    </>
  );
}

export default App;

function Button({ name, variant }) {
  //let props = {name : "save", variant="btn btn-sucess"}
  //let {name, varaint} = props
  return (
    <div id="my-btn">
      <button className={variant}>{name}</button>
    </div>
  );
}

function GuviCard({ courseDetails }) {
  function convertEpochToTime(epoch) {
    let milliseconds = epoch * 1000;
    let newDate = new Date(milliseconds);
    return newDate.toLocaleTimeString().slice(0, 5);
  }
  function getType(type) {
    if (type == "WE") {
      return "Week End";
    } else if (type == "WD") {
      return "Weed Day";
    } else {
      return "NIL";
    }
  }

  return (
    <div className="guvi-card">
      <TopContent
        courseDetails={courseDetails}
        convertEpochToTime={convertEpochToTime}
      />
      <MiddleContent courseDetails={courseDetails} />
      <Bottomcard courseDetails={courseDetails} getType={getType} />
    </div>
  );
}

function TopContent({ convertEpochToTime, courseDetails }) {
  return (
    <div className="flex-row">
      <div>{new Date().toLocaleString().slice(0, 8)}</div>
      <div>{`${convertEpochToTime(
        courseDetails.startTime
      )} to ${convertEpochToTime(courseDetails.endTime)}`}</div>
    </div>
  );
}

function MiddleContent({ courseDetails }) {
  return (
    <div className="card-content">
      <h3>{courseDetails.name}</h3>
      <div style={{ color: "#5e7087" }}>{courseDetails.course.name}</div>
      <div style={{ color: "#5e7087" }}>{courseDetails.language}</div>
    </div>
  );
}

function Bottomcard({ getType, courseDetails }) {
  return (
    <div className="flex-row">
      <div>{getType(courseDetails.type)} </div>
      <div>{courseDetails.students}</div>
    </div>
  );
}
