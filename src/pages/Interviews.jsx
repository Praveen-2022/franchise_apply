import React, { useState } from "react";
import "../styles/interviews.css";

const profilesData = [
  {
    id: 1,
    name: "Mr. Manish Mittal",
    title: "India's Leading Training Institute - Samyak Computer Classes",
    description:
      "Manish Mittal is the Chairman & Managing Director of Samyak Institute, known for his leadership in education and business. He graduated with a Bachelor of Engineering from the University of Rajasthan in 1998 and holds certifications in Quality Assurance, Automation, Project Management, and Consultancy. With over 5+ years of experience working in global companies like HP, Oracle, Symantec, and Avaya, he gained expertise in both technical and management roles. He also worked as a corporate trainer in MNCs.",
    image:
      "https://www.franchiseapply.com/admin/uploads/interview_images/678870.jpg",
  },
  {
    id: 2,
    name: "Mr. Mukul Tyagi & Mr. Sunil Tyagi Director ( ICON Group Of Schools )",
    title:
      "India's Fastest Growing Pre-School - ICON Nurturing Innocence Preschool",
    description:
      "Rahul Sharma has been a dedicated trainer in the IT field for over a decade. With a Master’s degree in Computer Science, he has mentored thousands of students in software development and project management. Rahul specializes in backend technologies and DevOps.",
    image:
      "https://www.franchiseapply.com/admin/uploads/interview_images/678870.jpg",
  },
];
const Interviews = () => {
  const [showMoreStates, setShowMoreStates] = useState({});

  const handleToggle = (id) => {
    setShowMoreStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Truncate text if it's too long
  const truncateText = (text, limit = 180) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };

  return (
    <>
      <div>
        {/* <Bottom_Header /> */}
        <h1 className="text-center py-4">Interviews</h1>
        <hr />
        <div className="container my-5">
          {profilesData.map((profile) => (
            
            <div
              key={profile.id}
              className="profile-card container border rounded p-4 mb-4"
            >

              <h6 className="badge text-dark interview-title">
                {profile.title}
              </h6>

              <div className="row">
                {/* Image Section */}
                <div className="col-md-3 text-center">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="profile-image rounded-circle img-fluid"
                  />
                </div>

                {/* Text Section */}
                <div className="col-md-9">
                  {!showMoreStates[profile.id] ? (
                    <p>{truncateText(profile.description)}</p>
                  ) : (
                    <p>{profile.description}</p>
                  )}

                  {/* Read More / Read Less Button */}
                  <button
                    onClick={() => handleToggle(profile.id)}
                    className="btn btn-outline-secondary mt-2"
                  >
                    {showMoreStates[profile.id] ? "Read less" : "Read more"}
                  </button>
                  <p className="mt-3 fw-bold">
                    {profile.name} ({profile.title})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviews;
