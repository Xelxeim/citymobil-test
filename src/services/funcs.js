class funcs {

  filterContent = (pattern, data) => {
    return data.filter(element => element[0].toLowerCase().includes(pattern.toLowerCase()));
  }


  //data is an array with arrays about each car. array1[array2[0]] - carName, array1[array2[1]] - traffics
  //extract data will return modified array array1[array2[0]] - carName, array1[array2[1]] - traffics, array1[array2[2]] - important data for sort
  headersKey = {
    0: "Марка и модель",
    1: "Стандарт",
    2: "Комфорт",
    3: "Бизнес",
    4: "Комфорт+",
    5: "Эконом",
    6: "Минивен",
    7: "Лайт",
  }

  extractdata = (data, key) => {
    const modifiedData = data.map(item => {
      if(Object.keys(item[1]).includes(this.headersKey[key])){
        item.push(item[1][this.headersKey[key]].year);
      } 
      else {
        item.push(0)
      }
      return item
    })
    return modifiedData;
  }

  sortData = (data, key, direction) => {
    let sortedData;
    if (key === 0) {
      sortedData = data.sort((a, b) => {
        return (direction === "asc") ? ('' + a[0]).localeCompare(b[0]) : ('' + b[0]).localeCompare(a[0])
      })
    } else {
      const modifiedData = this.extractdata(data, key);
      sortedData = modifiedData.sort((a, b) => {
        return (direction === "asc") ? a[2] - b[2] : b[2] - a[2];
      });
    }
    return sortedData;
  }
}

export default new funcs();