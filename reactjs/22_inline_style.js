import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Book from './book';
const root = ReactDOM.createRoot(document.getElementById('root'));
function BookStall()
{
    var divStyle = {display:'flex'}
    return (<div style={divStyle}>
        <Book name='Abc' author='xyz' rating='5' />
        <Book name='cde' author='hij' rating='4' />
        <Book name='cde' author='hij' rating='4' />22
    </div>)
}
root.render(<BookStall />);