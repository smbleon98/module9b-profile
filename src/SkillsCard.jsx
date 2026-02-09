import './SkillsCard.css';

function SkillsCard({tech, nontech}){

  return (
    <div className = "SkillsCard" style={{  width: '300px', margin: '10px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', alignItems: 'stretch'}}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' , textAlign: 'center'}}>Skills</h1>
      <p style={{ fontSize: '16px', color: '#000', textAlign: 'left'}}><strong>Technical:</strong> {tech}</p>
      <p style={{ fontSize: '16px', color: '#000', textAlign: 'left'}}><strong>Non-technical:</strong> {nontech}</p>
    </div>
  );
}

export default SkillsCard