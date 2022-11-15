import React from "react"
import { useState } from 'react';
import {closeModal} from '../../Utils/closemodal'

const AddItemsModal = function({items, setItems, setBudget, budgetSpend, setBudgetSpend}){
    const [nameItem, setNameItem] = useState("");
    const [priceItem, setPriceItem] = useState("");
    const [qtdItem, setQtdItem] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [validateForm, setValidateForm] = useState({
        "priceItem":true,
        "qtdItem":true
    })
    let itemsList = Object.assign([], items);
    const calcBudgetAvailable = function(itemsList){
        let totalSpend = 0;
        for(let l = 0; l < itemsList.length; l ++){
            totalSpend += itemsList[l].price_total_item
        }
        return totalSpend;
    }
    const addToList = function(evt){
        let objItem = {
            "name_item":nameItem,
            "price_item":Number(priceItem),
            "qtd_item":qtdItem,
            "price_total_item":Number(qtdItem*priceItem),
        }
        itemsList.push(objItem);
        setItems(itemsList);

        let totalSpend = calcBudgetAvailable(itemsList) || 0;
        
        setBudgetSpend(totalSpend);
        closeModal('addItemsModal');
        setNameItem("");
        setPriceItem("");
        setQtdItem("");
    }
    const cancelToList = function(){
        setNameItem("");
        setPriceItem("");
        setQtdItem("");
    }
    const validatFormAdditems = function(){
        let itemsValidate = Object.assign({}, validateForm)
        if(!priceItem) {
            itemsValidate.priceItem = false;
            setIsFormValid(false)
        }
        if(!qtdItem) {
            itemsValidate.qtdItem = false;
            setIsFormValid(false)
        }
        setValidateForm(itemsValidate)
    }
    return (
        <div className="modal fade" id="addItemsModal" tabIndex="-1" aria-labelledby="addItemsModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addItemsModalLabel">Adicionar item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="addItemsModalClose"></button>
                    </div>
                    <div className="modal-body">
                        <form
                            onSubmit={validatFormAdditems}>
                            <div className="mb-3">
                                <label htmlFor="nameItem" 
                                className="form-label">Nome</label>
                                <input type="text" 
                                    autoComplete="off"
                                    placeholder="Nome do item"
                                    value={nameItem} 
                                    onChange={(e) => setNameItem(e.target.value)}
                                    className="form-control" id="nameItem" aria-describedby="nameItem"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceItem" className="form-label">Preço</label>
                                <input type="text" 
                                    required
                                    placeholder="0.00"
                                    value={priceItem} 
                                    onChange={(e) => setPriceItem(e.target.value)}
                                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceItem" className="form-label">Quantidade</label>
                                <input type="text" 
                                    placeholder="0.00"
                                    required
                                    value={qtdItem} 
                                    onChange={(e) => setQtdItem(e.target.value)}
                                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
                            </div>
                            <div className="mb-3">
                                <h3>Total: {qtdItem*priceItem}</h3>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={addToList}
                                >Adicionar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                            onClick={cancelToList}
                            >Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItemsModal