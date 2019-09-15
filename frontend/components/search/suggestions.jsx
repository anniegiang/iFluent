import React, { PureComponent } from 'react'

 const Suggestions = (props) => {

     const options = props.languages.forEach(language => (
         <li key={language.id}>
            {language.language}
         </li>
     ))
     

     return (
         <ul>
            {options}
         </ul>
     )
 }

 export default Suggestions;
    