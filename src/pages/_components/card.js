import React from 'react';
import styled from 'styled-components';

import Text from '../../../components/Text';
import Radio from '../../../components/Radio';
import Checkbox from '../../../components/Checkbox';
import List from '../../../components/List';

// import * as CardTemplates from '../../../components';


const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 32px 0px;
`;

const Card = styled.button`
  position: relative;
  box-shadow: 0 6px 15px rgba(36,37,38,.08);
  border: 1px solid rgba(36,37,38,.03);
  border-radius: 16px;
  width: 300px;
  // min-height: 185.4px;
  cursor: auto;
  margin-bottom: 12px;
  padding: 10px;
  // background-color: #ddd;
`;
export default class Cards extends React.Component{

  onClick = (type) => {
    this.props.onSave(type);
  }
  render() {
    return (
      <Wrapper>
        {[Text].map((Component, i) => (
          <Card key={i} type="button" onClick={() => this.onClick('TEXT')}>
            {Component && <Component />}
          </Card>
        ))}
        {[Radio].map((Component, i) => (
          <Card key={i} type="button" onClick={() => this.onClick('RADIO')}>
            {Component && <Component />}
          </Card>
        ))}
        {[Checkbox].map((Component, i) => (
          <Card key={i} type="button" onClick={() => this.onClick('CHECKBOX')}>
            {Component && <Component />}
          </Card>
        ))}
        {[List].map((Component, i) => (
          <Card key={i} type="button" onClick={() => this.onClick('LIST')}>
            {Component && <Component />}
          </Card>
        ))}
     </Wrapper>
    )
  }
}
// export default () => (
//   <Wrapper>
//     {
//       // Object.keys(CardTemplates).map((e) => {
//       //   [e].map((Component, i) => (
//       //     // <Card key={i}>
//       //     //   {Component && <Component />}
//       //     // </Card>
//       //     console.log(i)
//       //   )) 
//       // })
//     }
//      {[Text].map((Component, i) => (
//       <Card key={i} type="button">
//         {Component && <Component />}
//       </Card>
//     ))}
//     {[Radio].map((Component, i) => (
//       <Card key={i} type="button">
//         {Component && <Component />}
//       </Card>
//     ))}
//     {[Checkbox].map((Component, i) => (
//       <Card key={i} type="button">
//         {Component && <Component />}
//       </Card>
//     ))}
//     {[List].map((Component, i) => (
//       <Card key={i} type="button">
//         {Component && <Component />}
//       </Card>
//     ))}
//   </Wrapper>
// );