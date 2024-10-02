function orderTicket(groupedData, orderby) {
  
  if (orderby === "Title") {
    return orderByTitle(groupedData);
  } else {
    return orderByPriority(groupedData);
  }
}

function orderByTitle(groupedData) {
  groupedData.forEach((category) => {
    category.tickets.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  });
 
  return groupedData;
}
function orderByPriority(groupedData) {
  groupedData.forEach((category) => {
    category.tickets.sort((a, b) => {
      return b.priority - a.priority;
    });
  });
  
  return groupedData;
}

export default orderTicket;
