import { Fragment, useState } from 'react';
import BudgetTotal from '../../Components/Forms/BudgetTotal';
import ListItemsTable from '../../Components/Lists/ListItemsTable'
import ListItemsCard from '../../Components/Lists/ListItemsCard'
import AddItemsModal from '../../Components/Modals/AddItemsModal'
import RemoveItemsModal from '../../Components/Modals/RemoveItemsModal'
import EditItemsModal from '../../Components/Modals/EditItemsModal'
import {
    Row,
    Col,
    Dropdown,
    DropdownButton 
} from 'react-bootstrap';
const Home = function(){

    const [itemsList, setItemsList] = useState([]);
    const [budget, setBudget] = useState("")
    const [budgetSpend, setBudgetSpend] = useState(0);
    const [itemRemove, setItemRemove] = useState({
        "name_item":'',
        "price_item":'',
        "qtd_item":'',
        "price_total_item":'',
    });
    const [itemEdit, setItemEdit] = useState({
        "name_item":'',
        "price_item":'',
        "qtd_item":'',
        "price_total_item":'',
    });
    const [listTypeView, setListTypeView] = useState('table');
    const changeView = function(type){
        setListTypeView(type)
    }
    return(
        <Fragment>
            <Row className='my-3'>
                <Col xs={12}>
                    <BudgetTotal 
                        budgetTotal={budget} 
                        setBudgetTotal={setBudget}
                        budgetSpend={budgetSpend}
                        />
                </Col>
                {budget > 0 && 
                    <Col xs={12} >
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addItemsModal">
                            Adicionar Item
                        </button>
                    </Col>
                }
                {itemsList.length > 0 &&
                    <Fragment>
                        <div className='col-12'>
                        
                            { listTypeView == 'table' && 
                                <ListItemsTable 
                                list={itemsList} 
                                setItemRemove={setItemRemove}
                                setItemEdit={setItemEdit}
                                />
                            }
                            { listTypeView == 'cards' && 
                                <ListItemsCard 
                                list={itemsList} 
                                setItemRemove={setItemRemove}
                                setItemEdit={setItemEdit}
                                />
                            }
                            
                        </div>
                    </Fragment> 
                        
                }
            </Row>
            <AddItemsModal 
                items={itemsList} 
                setItems={setItemsList}
                setBudget={setBudget}
                budgetSpend={budgetSpend} 
                setBudgetSpend={setBudgetSpend}
                />
            <EditItemsModal 
                items={itemsList} 
                setItemsList={setItemsList}
                setBudgetSpend={setBudgetSpend}
                itemEdit={itemEdit}
                />
            <RemoveItemsModal 
                items={itemsList} 
                setItemsList={setItemsList}
                setBudgetSpend={setBudgetSpend}
                itemRemove={itemRemove}
                />
        </Fragment>

    )
}

export default Home;