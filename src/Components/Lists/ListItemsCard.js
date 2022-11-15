import {
    Row,
    Table,
    Col,
    Card,
    Button
} from 'react-bootstrap';
const ListItemsTable = function({list, setItemRemove}){

    const removeItemList = function(item, idx){
        let objItem = Object.assign([], list);
        setItemRemove(objItem[idx])
    }
 
    return (
        <Row >
            <Col xs={12}>
                {list.map((item, idx)=> (
                    <Card className="my-3" key={idx}>
                        <Card.Body>
                            <h3 className='text-center'>#{idx + 1} - {item.name_item || `Item ${idx + 1}`}</h3>
                            <h1 className='text-center'>
                                <span className='fs-1'>
                                    <strong>R$:</strong>
                                </span> 
                                {item.price_item.toFixed(2)}
                            </h1>
                            <p className='fs-2'><span className='fs-1'><strong>Total:</strong></span> {item.price_total_item.toFixed(2)}</p>
                            <p className='fs-2'><span className='fs-1'><strong>Quantidade:</strong></span>   {item.qtd_item}</p>
                            <Button
                                variant="danger">
                                <i className="bi-trash"
                                    data-bs-toggle="modal" data-bs-target="#removeItemsModal"
                                    onClick={(e) =>  removeItemList(item, idx)}></i>
                            </Button>
                        </Card.Body>
                    </Card>
                 )
            )}
            </Col>
        </Row>
    )
}

export default ListItemsTable