import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var output=( <div>
  <h2> Men's T20 World Cup Fixtures</h2>
    <table>
        <tr>
            <th>Date</th>
            <th>Match</th>
            <th>Venue</th>
        </tr>
        <tr>
            <td>2 June 2026</td>
            <td>India vs Pakistan</td>
            <td>Mumbai</td>
        </tr>
        <tr>
            <td>3 June 2026</td>
            <td>Australia vs England</td>
            <td>Sydney</td>
        </tr>
        <tr>
            <td>4 June 2026</td>
            <td>South Africa vs New Zealand</td>
            <td>Cape Town</td>
        </tr>
    </table>
</div>)


root.render(output);


