import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock1 = styled.div`
  background: #4280e3;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
const StatBlock2 = styled.div`
  background: #bf1313;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;const StatBlock3 = styled.div`
background: #42b852;
font-size: 2rem;
padding: 2rem;
border-radius: 2rem;
display: grid;
align-items: center;
justify-items: center;
text-align: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <StatGrid>
      <StatBlock1>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock1>
      <StatBlock2>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock2>
      <StatBlock3>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock3>
    </StatGrid>
    
  );
}
