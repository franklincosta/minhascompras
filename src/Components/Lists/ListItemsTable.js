import {
    Row,
    Table,
    Col,
    Card,
    Button
} from 'react-bootstrap';
const ListItemsTable = function({list, setItemRemove, setItemEdit}){

    const removeItemList = function(item, idx){
        let objItem = Object.assign([], list);
        setItemRemove(objItem[idx])
    }

    const editItemList = function(item, idx){
        let objItem = Object.assign([], list);
        objItem[idx].idx = idx;
        setItemEdit(objItem[idx])
    }
 
    return (
        <Row >
            <Col xs={12}>
                <Card className="my-3">
                   
                    <Card.Body>
                        <h2>Itens adicionados</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Quantidade</th>
                                    <th scope="col">Total</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((item, idx)=> (
                                        <tr key={idx}>
                                            <td data-headerdata="#" scope="row">{idx + 1}</td>
                                            <td data-headerdata="Nome">
                                                {item.name_item || `Item ${idx + 1}`}
                                            </td>
                                            <td data-headerdata="Preço">{item.price_item}</td>
                                            <td data-headerdata="Quantidade">{item.qtd_item}</td>
                                            <td data-headerdata="Total">{item.price_total_item}</td>
                                            <td id="actionItem">
                                                <Button
                                                    variant="danger">
                                                    <i className="bi-trash"
                                                        data-bs-toggle="modal" data-bs-target="#removeItemsModal"
                                                        onClick={(e) =>  removeItemList(item, idx)}></i>
                                                </Button>
                                                <Button
                                                    variant="danger">
                                                    <i className="bi-pencil"
                                                        data-bs-toggle="modal" data-bs-target="#editItemsModal"
                                                        onClick={(e) =>  editItemList(item, idx)}></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ListItemsTable