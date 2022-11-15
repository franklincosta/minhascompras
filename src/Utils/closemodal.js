const closeModal = function(idElem){
    const addItemsModal = document.getElementById(idElem)
    addItemsModal.querySelector(`#${idElem}Close`).click();
}

export {closeModal};