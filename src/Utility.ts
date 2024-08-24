const isEmptyObject = (obj) => {
    for (const o in obj) {
      return false;
    }
  
    return true;
  };

  const isEmpty = (str) => {
    return (str === null || str === undefined || str === "");
  };
  
  const isNotEmpty = (str)=> {
    return !(str === null || str === undefined || str === "");
  };

  export default {
    isEmptyObject,
    isEmpty,
    isNotEmpty
  }