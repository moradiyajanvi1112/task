
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Restaurant extends React.Component
{
    render()
    {
        return(<div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 mb-2">
                <div class="card shadow">
                    <div class="card-header d-flex text-bg-primary justify-content-between">
                        <div class="fw-bold">Ram Patel</div>
                        <span class="badge text-bg-light">1</span>
                    </div>
                    <div class="card-body">
                       <button type="button" class="btn btn-primary w-100">Thali - 0</button>
                       <table class="table w-100">
                        <tr>
                            <td width="50%">
                                    <button type="button" class="btn btn-success shadow w-100">Chas
                                        <span class="badge text-bg-light">1</span>
                                    </button>
                            </td>
                            <td width="50%">
                                    <button type="button" class="btn btn-secondary shadow w-100">Roti
                                        <span class="badge text-bg-light">1</span>
                                    </button>
                            </td>
                        </tr>

                        <tr>
                            <td width="50%">
                                    <button type="button" class="btn btn-danger shadow w-100">Papad
                                        <span class="badge text-bg-light">1</span>
                                    </button>
                            </td>
                            <td width="50%">
                                    <button type="button" class="btn btn-warning shadow w-100">Sweet
                                        <span class="badge text-bg-light">1</span>
                                    </button>
                            </td>
                        </tr>
                       </table>
                    </div>
                    <div class="card-footer bg-light justify-content-end d-flex">
                        Total Amount:  <span class="fw-bold">1234</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}
 

root.render(<Restaurant/>);
