import React from "react"
import { useState } from 'react';
import {closeModal} from '../../Utils/closemodal'
const RemoveItemsModal = function({items, setItemsList, setBudgetSpend, itemRemove}){
    const removeItemList = function(item, idx){
        let objItem = Object.assign([], items);
        objItem.splice(idx, 1);
        var totalSpend = calcBudgetAvailable(objItem)
        setBudgetSpend(totalSpend);
        setItemsList(objItem);
        closeModal('removeItemsModal');
    }
    const calcBudgetAvailable = function(itemsList){
        let totalSpend = 0;
        for(let l = 0; l < itemsList.length; l ++){
            totalSpend += itemsList[l].price_total_item
        }
        return totalSpend;
    }
    return (
        <div className="modal fade" id="removeItemsModal" tabIndex="-1" aria-labelledby="removeItemsModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="removeItemsModalLabel">Remover item</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="removeItemsModalClose"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nameItem" 
                                className="form-label">Nome</label>
                                <input type="text" 
                                    autoComplete="off"
                                    placeholder="Nome do item"
                                    value={itemRemove.name_item} 
                                    disabled
                                    className="form-control" 
                                    id="nameItem" 
                                    aria-describedby="nameItem"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceItem" className="form-label">Preço</label>
                                <input type="text" 
                                    required
                                    placeholder="0.00"
                                    value={itemRemove.price_item} 
                                    disabled
                                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceItem" className="form-label">Quantidade</label>
                                <input type="text" 
                                    placeholder="0.00"
                                    required
                                    value={itemRemove.qtd_item} 
                                    disabled
                                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
                            </div>
                            <div className="mb-3">
                                <h3>Total: {itemRemove.qtd_item*itemRemove.price_item}</h3>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                        <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={removeItemList}
                                >Remover</button>                    
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveItemsModal