import noPriority from '@/assets/pictures/icons/No_priority.svg';
import lowPriority from '@/assets/pictures/icons/Img_LowPriority.svg';
import mediumPriority from '@/assets/pictures/icons/Img_MediumPriority.svg';
import highPriority from '@/assets/pictures/icons/Img_Highpriority.svg';
import urgentPriority from '@/assets/pictures/icons/SVG_UrgentPrioritycolour.svg';
import inProgress from '@/assets/pictures/icons/in_progress.svg';
import todo from '@/assets/pictures/icons/To_do.svg';
import backlog from '@/assets/pictures/icons/Backlog.svg';
import cancelled from '@/assets/pictures/icons/Cancelled.svg';
import done from '@/assets/pictures/icons/done.svg';
import profileImg from '@/assets/pictures/profile.jpg';

const imageObject = {
  'Priority': {
    0: noPriority,
    1: lowPriority,
    2: mediumPriority,
    3: highPriority,
    4: urgentPriority
  },
  'Status': {
    'In progress': inProgress,
    'Todo': todo,
    'Backlog': backlog,
    'Done': done,
    'Cancelled': cancelled,
  },
  'User': {
    'profile': profileImg
  }
};

function getimage(value,check){
  return imageObject[check][value]
}

function getPriority(text) {
  if (text == 0) {
    return 'No priority';
  } else if (text == 1) {
    return 'Low';
  } else if (text == 2) {
    return 'Medium';
  } else if (text == 3) {
    return 'High';
  } else {
    return 'Urgent';
  }
}

function group_data(modifiedData, groupby) {
  if (groupby === "Priority") {
    return group_data_by_priority(modifiedData);
  } else if (groupby === "User") {
    return group_data_by_users(modifiedData);
  } else {
    return group_data_by_status(modifiedData);
  }
}

function modifyDatavalue(tickets, users) {
  let modifiedData = [];
  tickets.forEach((ticket) => {
    let userId = ticket.userId;
    let userDetail = users.find((user) => user.id === userId);
    let userData = {
      name: userDetail.name,
      available: userDetail.available
    };
    let modifiedTicket = { ...ticket, ...userData };
    modifiedData.push(modifiedTicket);
  });
 
  return modifiedData;
}

function group_data_by_status(modifiedTickets) {
  const groupedTickets = modifiedTickets.reduce((acc, ticket) => {
    if (!acc[ticket.status]) {
      acc[ticket.status] = [];
    }

    let new_ticket = { ...ticket };
    acc[ticket.status].push(new_ticket);
    return acc;
  }, {});

  let new_modified_data = [];
  for (let status in groupedTickets) {
    let modifiedTicketobj = {
      ticketCategory: {
        categoryValue: status,
        categoryImg: imageObject['Status'][status],
      },
      tickets: groupedTickets[status],
    };
    new_modified_data.push(modifiedTicketobj);
  }

  return new_modified_data;
}

function group_data_by_priority(modifiedTickets) {
  const groupedTickets = modifiedTickets.reduce((acc, ticket) => {
    if (!acc[ticket.priority]) {
      acc[ticket.priority] = [];
    }

    let new_ticket = { ...ticket };
    acc[ticket.priority].push(new_ticket);
    return acc;
  }, {});

  let new_modified_data = [];
  for (let priority in groupedTickets) {
    let modifiedTicketobj = {
      ticketCategory: {
        categoryValue: getPriority(priority),
        categoryImg: imageObject['Priority'][priority],
      },
      tickets: groupedTickets[priority],
    };
    new_modified_data.push(modifiedTicketobj);
  }

  return new_modified_data;
}

function group_data_by_users(modifiedTickets) {
  const groupedTickets = modifiedTickets.reduce((acc, ticket) => {
    if (!acc[ticket.userId]) {
      acc[ticket.userId] = [];
    }

    let new_ticket = { ...ticket };
    acc[ticket.userId].push(new_ticket);
    return acc;
  }, {});

  let new_modified_data = [];
  for (let userId in groupedTickets) {
    let modifiedTicketobj = {
      ticketCategory: {
        categoryValue: groupedTickets[userId][0].name,
        categoryImg: imageObject['User']['profile'],
      },
      tickets: groupedTickets[userId],
    };
    new_modified_data.push(modifiedTicketobj);
  }

  return new_modified_data;
}

export { group_data, modifyDatavalue,getimage };
