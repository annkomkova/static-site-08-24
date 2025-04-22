import React from 'react'

import A_Title from './A_Title.jsx'

// export default class M_Card extends React.Component {
//   render() {
//     return (
//       <div className="M_Card">
//         <A_Title name={this.props.name} />
//         <p className="A_Description">{this.props.description}</p>
//       </div>
//     )
//   }
// }

export default function M_Card({ name, description }) {
  return (
    <div className="M_Card">
      <A_Title name={name} />
      <p className="A_Description">{description}</p>
    </div>
  )
}
