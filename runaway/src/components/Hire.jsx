import "./hiring1.css";

const Hire = () => {
  // Sample data for names, places, and ratings
  const data = [
    { name: "Arjun", place: "Mumbai", rating: 4.6 },
    { name: "Aisha", place: "Delhi", rating: 4.3 },
    { name: "Rohan", place: "Bangalore", rating: 4.2 },
    { name: "Ananya", place: "Chennai", rating: 4.5 },
    { name: "Vikram", place: "Hyderabad", rating: 4.8 },
    { name: "Priya", place: "Pune", rating: 4.7 },
    { name: "Dev", place: "Kolkata", rating: 4.1 },
    { name: "Riya", place: "Ahmedabad", rating: 4.9 },
    { name: "Sahil", place: "Jaipur", rating: 4.4 },
    { name: "Kiara", place: "Lucknow", rating: 4.0 },
    { name: "Arjun", place: "Mumbai", rating: 4.6 },
    { name: "Aisha", place: "Delhi", rating: 4.3 },
    { name: "Rohan", place: "Bangalore", rating: 4.2 },
    { name: "Ananya", place: "Chennai", rating: 4.5 },
    { name: "Vikram", place: "Hyderabad", rating: 4.8 }
  ];

  return (
    <div className="OG">
      <div className="Main">
        {/* Mapping over the data to create multiple containers */}
        {data.map((item, index) => (
          <div className="container1" key={index}>
            <div className="imgcontainer">
              {/* Using different images for each item */}
              {index % 2 === 0 ? (
                <img
                  className="img"
                  src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                  alt="Profile"
                />
              ) : (
                <img
                  className="img"
                  src={`https://randomuser.me/api/portraits/women/${index + 1}.jpg`}
                  alt="Profile"
                />
              )}
            </div>
            <div className="Text1">
              <div className="Name">
                <span>{item.name}</span>
              </div>
              <div className="Place">
                <span>{item.place}</span>
              </div>
              <div className="Rating">
                <span>{item.rating}</span>
              </div>
              <div className="hire">
                <button>Hire</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hire;
