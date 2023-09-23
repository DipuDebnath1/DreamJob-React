const getLocalStorage = () => {
    const sacvedCard =  localStorage.getItem('cardId');
    if (sacvedCard) {
        return JSON.parse(sacvedCard);
    }
    return[]
    
    
}

const saveLocalStorage = id =>{
    
    const storedData = getLocalStorage()
    const exist = storedData.find(sotorId=>sotorId==id);
    if (!exist) {
        storedData.push(id);
        localStorage.setItem('cardId',JSON.stringify(storedData))
        return true;
    }
    return false
} 
 
export {saveLocalStorage,getLocalStorage}