import { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h2{
    
  
    text-align:center;
  }
  .tab{
    margin-left:675px;
    margin-bottom:50px;
    text-align:center;
  
  }
  .message{
    font-size:32px;
    margin-top:50px;
    margin-left:1px;
    margin-bottom:5px;
    text-align:center;
  }
  .message1{
    font-size:16px;
    margin-top:100px;
    margin-left:1px;
    margin-bottom:5px;
    text-align:center;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api/"></Stats>
      <CountrySelector></CountrySelector>

      <div className="message">The best way to prevent illness is to avoid being exposed to this virus ! For more info visit <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html" target="_blank">CDC website</a></div>
      <div className="message1">Develop by : <a href="https://www.linkedin.com/in/aleksandar-georgievski-017b4576"> Aleksandar G</a></div>

    </div>
  );
}
