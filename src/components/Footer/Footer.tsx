import styled from "styled-components";

const Footer = styled.footer`
  background-color: #fcfcfc;

  color: white;

  padding: 3rem 2rem;



  margin-top: 4rem;
`;

const FooterContent = styled.div`

  max-width: 1000px;

  margin: 0 auto;

  color: #000000;
`;

const CompanyName = styled.h2`

  margin: 0 0 1.5rem;

  color: #b9873c;

`;

const Info = styled.p`

  margin: 0.4rem 0;
  
  line-height: 1.5;
`;

function Footeren() {
  return (
    <Footer>

      <FooterContent>

        <CompanyName>WALLYWOOD</CompanyName>

        <Info>CVR: 12345678</Info>

        <Info>MAIL: info@wallywood.dk</Info>

        <Info>MOBIL: +45 9812 3456</Info>

        <Info>Øster Uttrupvej 1</Info>



        <Info>9000 Aalborg</Info>

      </FooterContent>
    </Footer>

  );
}

export default Footeren;