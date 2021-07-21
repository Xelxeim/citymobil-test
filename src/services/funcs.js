class funcs {
  filterContent = (pattern, data) => {
    return data.toLowerCase().includes(pattern.toLowerCase());
  }
}

export default new funcs();