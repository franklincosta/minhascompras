import React from "react"
import { useState } from 'react';
import {closeModal} from '../../Utils/closemodal'
const RemoveItemsModal = function({items, setItemsList, setBudgetSpend, itemEdit}){
    const [nameItem, setNameItem] = useState("");
    const [priceItem, setPriceItem] = useState("");
    const [qtdItem, setQtdItem] = useState("");

    const editItemList = function(item, idx){
        let objItem = Object.assign([], items);
        objItem[idx] = item;
        var totalSpend = calcBudgetAvailable(objItem)
        setBudgetSpend(totalSpend);
        setItemsList(objItem);
        closeModal('editItemsModal');
    }
    const changeInfoItem = function(key, value){
        const idx = itemEdit.idx;
        let objItem = Object.assign([], items);
        
        for(let i in objItem[idx]){
            if(i === key) objItem[idx][i] = value
        }

        setItemsList(objItem);
    }
    
    const calcBudgetAvailable = function(itemsList){
        let totalSpend = 0;
        for(let l = 0; l < itemsList.length; l ++){
            totalSpend += itemsList[l].price_total_item
        }
        return totalSpend;
    }
    return (
        <div className="modal fade" id="editItemsModal" tabIndex="-1" aria-labelledby="editItemsModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editItemsModalLabel">Remover item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="editItemsModalClose"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nameItem" 
                                className="form-label">Nome</label>
                                <input type="text" 
                                    autoComplete="off"
                                    placeholder="Nome do item"
                                    value={itemEdit.name_item} 
                                    onChange={(e) => changeInfoItem('name_item', e.target.value)}
                                    className="form-control" 
                                    id="nameItem" 
                                    aria-describedby="nameItem"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceItem" className="form-label">Preço</label>
                                <input type="text" 
                                    required
                                    placeholder="0.00"
                                    value={itemEdit.price_item} 
                                    onChange={(e) => changeInfoItem('price_item',e.target.value)}
                                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceItem" className="form-label">Quantidade</label>
                                <input type="text" 
                                    placeholder="0.00"
                                    required
                                    value={itemEdit.qtd_item} 
                                    onChange={(e) => changeInfoItem('qtd_item',e.target.value)}
                                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
                            </div>
                            <div className="mb-3">
                                <h3>Total: {itemEdit.qtd_item*itemEdit.price_item}</h3>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                        <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={editItemList}
                                >Confirmar</button>                    
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveItemsModal