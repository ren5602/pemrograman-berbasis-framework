const About = () =>{
  const nama = "Muhammad Nur Aziz";
  const nim = "2341720237";
  const programStudi = "Teknik Informatika";

  return (
    <div>
      <h1>{nama}</h1>
      <p>NIM: {nim}</p>
      <p>Program Studi: {programStudi}</p>
        <button className="btn btn-secondary" onClick={() => window.location.href = "/"}>Home</button>
    </div>
  );
};

export default About;
