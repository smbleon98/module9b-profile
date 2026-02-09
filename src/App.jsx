import SkillsCard from './SkillsCard';
import UserProfile2 from './UserProfile';

function App() {
  return (
    <div >
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
        <UserProfile2
          name = "Shadia Milon - Age 27"
          bio = "A functional analyst in the workforce seeking technical skills to help build user-friendly applications."
          profileImage = "https://www.purina.co.uk/sites/default/files/2020-12/How%20Long%20Do%20Cats%20SleepTEASER.jpg"
        />

        <UserProfile2
          name = "Shadia Milon - Age 19"
          bio = "An undergrad student of international relations who thought they couldn't do STEM."
          profileImage = "https://www.shutterstock.com/image-vector/confusion-flat-style-illustration-design-260nw-2174676411.jpg"
        />
      </div>

      <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
        <SkillsCard
          tech = "Python, C++, GIS"
          nontech = "Workshop facilitation, requirements gathering"
        />

        <SkillsCard
          tech = "None"
          nontech = "Research, presentation"
        />
      </div>
  </div>
  );
}

export default App;