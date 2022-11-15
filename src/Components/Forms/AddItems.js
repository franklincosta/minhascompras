import { useState } from 'react';

const AddItems = function({items, setItems, setBudget, udgetAvailable, setBudgetSpend}){
    const [nameItem, setNameItem] = useState("");
    const [priceItem, setPriceItem] = useState("");
    const [qtdItem, setQtdItem] = useState("");

    let itemsList = Object.assign([], items);

    const addToList = function(evt){
        let objItem = {
            "name_item":nameItem,
            "price_item":priceItem,
            "qtd_item":qtdItem,
            "price_total_item":qtdItem*priceItem,
        }
        itemsList.push(objItem);
        setItems(itemsList);
        let totalSpend = 0;
        for(let l = 0; l < itemsList.length; l ++){
            totalSpend += itemsList[l].price_total_item
        }
        setBudgetSpend(totalSpend);
        const addItemsModal = document.getElementById('addItemsModal')
        addItemsModal.querySelector('#addItemsModalClose').click();
    }

    return(
        <form>
            <div className="mb-3">
                <label htmlFor="nameItem" 
                className="form-label">Nome</label>
                <input type="text" 
                    autoComplete="off"
                    value={nameItem} 
                    onChange={(e) => setNameItem(e.target.value)}
                    className="form-control" id="nameItem" aria-describedby="nameItem"/>
            </div>
            <div className="mb-3">
                <label htmlFor="priceItem" className="form-label">Preço</label>
                <input type="text" 
                    value={priceItem} 
                    onChange={(e) => setPriceItem(e.target.value)}
                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
            </div>
            <div className="mb-3">
                <label htmlFor="priceItem" className="form-label">Quantidade</label>
                <input type="text" 
                    value={qtdItem} 
                    onChange={(e) => setQtdItem(e.target.value)}
                    className="form-control" id="priceItem" aria-describedby="priceItem"/>
            </div>
            <div className="mb-3">
                <h3>Total: {qtdItem*priceItem}</h3>
                
            </div>
            <div className="mb-3">
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={addToList}
                >Adicionar</button>
            </div>
        </form>
    )
    
}

export default AddItems;