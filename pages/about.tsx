import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const AboutSection = styled.section`
  padding: 20px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    margin-bottom: 10px;
    font-size: 18px;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
    white-space: nowrap;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 6px;
    }

    th {
      font-size: 14px;
    }

    td {
      font-size: 12px;
    }
  }
`;

const About: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      
      <Main>
        <AboutSection id="about">
          <div>
            <h2>
              સંસ્થા/ મંડળનું નામ: <span>42 લેઉવા પાટીદાર યુવા મંડળ</span>
            </h2>
            <p>
              <span>કાર્યક્ષેત્ર: </span>
              પાટણ, મહેસાણા અને બનાસકાંઠા જિલ્લામાં આવતા સમાજના 53 ગામો અને તે
              ગામના ગુજરાત તથા ગુજરાત બહાર વસતા તમામ લોકો.
            </p>
            <p>
              <span>ઉદ્દેશ - હેતુ: </span>
              વર્તમાન પરિસ્થિતીના પરીક્ષેપમાં સમાજના સમતોલ અને સર્વાંગી વિકાસ માટે
              સમાજ સંલગ્ન જુદા-જુદા ક્ષેત્રના વિવિધલક્ષી કાર્યક્રમ હાથ ધરવામાં આવશે.
            </p>
            <p>
              <span>અ. </span>
              શૈક્ષણિક ક્ષેત્ર
              <br />
              <span>બ. </span>
              આરોગ્ય ક્ષેત્ર
              <br />
              <span>ક. </span>
              કૃષિ ક્ષેત્ર
              <br />
              <span>ડ. </span>
              રોજગાર લક્ષી તથા સામાજિક કાર્યો
            </p>
            <p>
              <span>સરનામું: </span>
              20, મંગલમ સ્કવેર, સદભાવ હોસ્પિટલની સામે, પાટણ
            </p>
            <h4>કારોબારી સમિતિ</h4>

            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>સ્થાન</th>
                    <th>નામ</th>
                    <th>ગામ</th>
                    <th>મોબાઈલ નંબર</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>પ્રમુખ</td>
                    <td>પટેલ સોહનભાઈ દિનેશકુમાર</td>
                    <td>સંખારી</td>
                    <td>૮૭૫૮૪૧૯૭૯૦</td>
                  </tr>
                  <tr>
                    <td>ઉપપ્રમુખ</td>
                    <td>પટેલ હાર્દિકકુમાર</td>
                    <td>અડીયા</td>
                    <td>૯૯૨૫૬૮૯૯૮૯</td>
                  </tr>
                  <tr>
                    <td>મંત્રી</td>
                    <td>પટેલ દિક્ષિત રમેશભાઈ</td>
                    <td>કિમ્બુવા</td>
                    <td>૯૯૦૯૫૪૭૬૦૭</td>
                  </tr>
                  <tr>
                    <td>સહમંત્રી</td>
                    <td>પટેલ જીતેન્દ્રભાઈ ગાંડાલાલ</td>
                    <td>કણી</td>
                    <td>૭૯૯૦૮૦૯૦૩૪</td>
                  </tr>
                  <tr>
                    <td>ખજાનચી</td>
                    <td>પટેલ રૂચિત અમૃતલાલ</td>
                    <td>અધાર</td>
                    <td>૯૭૧૨૯૬૫૭૭૧</td>
                  </tr>
                  <tr>
                    <td>કા. સભ્ય</td>
                    <td>પટેલ સંદિપ ત્રિકમભાઈ</td>
                    <td>ચંદ્રુમાણા</td>
                    <td>૯૯૯૮૯૦૩૭૧૮</td>
                  </tr>
                  <tr>
                    <td>કા. સભ્ય</td>
                    <td>પટેલ હાર્દિકકુમાર મણીલાલ</td>
                    <td>મકતુપુર</td>
                    <td>૯૭૨૫૬૦૧૯૯૯</td>
                  </tr>
                  <tr>
                    <td>કા. સભ્ય</td>
                    <td>પટેલ સંકેત વિરચંદભાઈ</td>
                    <td>સરવા</td>
                    <td>૭૦૧૬૮૫૦૩૪૮</td>
                  </tr>
                  <tr>
                    <td>કા. સભ્ય</td>
                    <td>પટેલ પરેશકુમાર આશાભાઈ</td>
                    <td>સમોડા</td>
                    <td>૭૬૯૮૭૬૭૫૨૦</td>
                  </tr>
                  <tr>
                    <td>કા. સભ્ય</td>
                    <td>પટેલ વિશાલકુમાર જયંતિલાલ</td>
                    <td>સરસાવ</td>
                    <td>૯૪૨૭૭૭૬૧૨૨</td>
                  </tr>
                  <tr>
                    <td>કા. સભ્ય</td>
                    <td>પટેલ મનોજકુમાર દ્વારકાદાસ</td>
                    <td>હાન્સાપુર</td>
                    <td>૯૯૦૪૬૨૯૭૧૭</td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </div>
        </AboutSection>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default About;
