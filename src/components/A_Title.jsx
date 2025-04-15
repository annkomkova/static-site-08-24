import React from 'react'

const user = {
  name: 'Anna',
  age: 27,
  pet: 'cat'
}

export default class A_Title extends React.Component {
  render() {
    return <h1 className="A_Title"> {this.props.name} </h1>
  }
}

// export default function A_Title() {
//   return <h1 className="A_Title">Заголовок</h1>
// }
