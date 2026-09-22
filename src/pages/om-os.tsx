import styled from "styled-components";
import AboutImageFile from "../assets/logo.png"

const Page = styled.main`

  max-width: 1200px;

  margin: 0 auto;

  padding: 1rem 1.5rem 0;
`;

const Heading = styled.h1`

  color: #d97757;

  font-size: 1.8rem;


  margin: 0 0 1.5rem;
`;

const Content = styled.div`
  display: grid;

  grid-template-columns: 1fr 350px;

  gap: 3rem;

  align-items: start;
`;

const Text = styled.div`
  font-size: 0.85rem;

  line-height: 1.4;
`;

const Paragraph = styled.p`

  margin: 0 0 1.5rem;
`;

const AboutImage = styled.img`

  width: 100%;

  max-width: 350px;


  display: block;
`;

function OmOs() {
  return (
    <Page>

      <Heading>Om os</Heading>

      <Content>
        <Text>
          <Paragraph>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis
            hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus
            congue velit. Pellentesque sagittis est eget nisi malesuada, a
            aliquet est imperdiet. Aenean dapibus finibus laoreet.

          </Paragraph>

          <Paragraph>

            Phasellus faucibus libero eu malesuada tristique. Donec tristique
            lacus in ipsum sollicitudin viverra. Sed porttitor sit amet felis
            accumsan egestas. Fusce quis commodo urna, non feugiat odio. Nam in
            tempus magna.

          </Paragraph>

          <Paragraph>



            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis
            hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus
            congue velit.
          </Paragraph>


          <Paragraph>


            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis
            hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus
            congue velit. Pellentesque sagittis est eget nisi malesuada, a
            aliquet est imperdiet.


          </Paragraph>

          <Paragraph>




            Phasellus faucibus libero eu malesuada tristique. Donec tristique
            lacus in ipsum sollicitudin viverra. Sed porttitor sit amet felis
            accumsan egestas. Fusce quis commodo urna, non feugiat odio.
          </Paragraph>

          

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis
            hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus
            congue velit.
          </Paragraph>
        </Text>

        <AboutImage
          src={AboutImageFile}
          alt="WALLYWOOD"
        />
      </Content>
    </Page>
  );
}

export default OmOs;