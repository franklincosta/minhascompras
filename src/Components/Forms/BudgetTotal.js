import { Fragment, useState } from "react";
import {
    Row,
    Table,
    Col,
    Card,
    Button,
    ProgressBar
} from 'react-bootstrap';
const BudgetTotal = function({budgetTotal, setBudgetTotal, budgetSpend, setBudgetSpend}){
    const [isBudgetDisabled, setIsBudgetDisabled] = useState(false)
    const confirmLimit = function(budgetDisable){
        setIsBudgetDisabled(budgetDisable)
    }
    return(
        <Fragment>
             <Card className="mb-3">
                <Card.Body>
                    <h2>Orçamento</h2>
                    {!isBudgetDisabled && 
                        <form>
                            <div className="mb-3">
                                <label htmlFor="budgetTotal" 
                                className="form-label">Valor total</label>
                                <input type="text" 
                                    value={budgetTotal} 
                                    onChange={(e) => setBudgetTotal(e.target.value)}
                                    placeholder="0.00"
                                    className="form-control" id="budgetTotal" aria-describedby="budgetTotal"
                                    disabled={isBudgetDisabled}
                                    />
                                
                            </div>
                            <div className="">
                                <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={(e) => confirmLimit(true)}
                                >Confirmar</button>
                            </div>
                        </form>
                    }
                    {isBudgetDisabled && 
                        <Fragment>
                            <p className="fs-2">
                                Total: <strong>{budgetTotal}</strong>
                                <i className="bi bi-pencil" onClick={(e) => confirmLimit(false)}></i>
                            </p>
                            <ProgressBar 
                                style={
                                    {
                                        'height':'26px',
                                    }
                                }
                                variant='danger'
                                label={`${budgetSpend.toFixed(2)}`} 
                                now={budgetSpend} 
                                min={0} 
                                max={budgetTotal}/>
                            <p className="mb-0 mt-2 fs-3"> Disponível: <strong>{(budgetTotal - budgetSpend).toFixed(2)}</strong></p>
                        </Fragment>
                    }
                </Card.Body>
            </Card>
           
        </Fragment>
    )
}

export default BudgetTotal;