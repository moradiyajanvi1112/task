import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookRecord from './BookRecord';
import styled from 'styled-components'


const Div =styled.div` 
 font-family: Arial;
background-color: #f2f2f2;
`



function Books() {
    return(<Div>
            <BookRecord name='Best' author='johan' price='123' rarting='5' category='fiction' language='english'/>
            <BookRecord name='Best' author='johan' price='123' rarting='5' category='fiction' language='english'/>
            
           
</Div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Books />)