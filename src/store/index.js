const users = [
    {
      name: 'Sai Adams',
      userId: 123
    },
    {
      name: 'Sam Jacob',
      userId: 124
    },
    {
      name: 'Ray Symonds',
      userId: 125
    },
    {
      name: 'Alex Lankaster',
      userId: 126
    },
    {
      name: 'Steve Smith',
      userId: 127
    },
    {
      name: 'Ram Jordan',
      userId: 128
    }
  ];

const transactions = [
  { userId: 123, transactionId: 1001, amount: 120.30, date: '01/03/2022' },
  { userId: 123, transactionId: 1002, amount: 100.00, date: '01/12/2022' },
  { userId: 123, transactionId: 1003, amount: 57.00, date: '02/03/2022' },
  { userId: 123, transactionId: 1004, amount: 323.80, date: '02/14/2022' },
  { userId: 123, transactionId: 1005, amount: 220.30, date: '03/09/2022' },

  { userId: 124, transactionId: 1006, amount: 20.00, date: '01/03/2022' },
  { userId: 124, transactionId: 1007, amount: 51.30, date: '01/04/2022' },
  { userId: 124, transactionId: 1008, amount: 115.30, date: '01/07/2022' },
  { userId: 124, transactionId: 1009, amount: 67.30, date: '02/08/2022' },
  { userId: 124, transactionId: 1010, amount: 86.60, date: '02/13/2022' },
  { userId: 124, transactionId: 1011, amount: 220.00, date: '02/22/2022' },
  { userId: 124, transactionId: 1012, amount: 70.30, date: '03/03/2022' },

  { userId: 125, transactionId: 1013, amount: 90.30, date: '01/02/2022' },
  { userId: 125, transactionId: 1014, amount: 70.30, date: '01/10/2022' },
  { userId: 125, transactionId: 1015, amount: 12.30, date: '01/21/2022' },

  { userId: 126, transactionId: 1016, amount: 59.30, date: '01/23/2022' },
  { userId: 126, transactionId: 1017, amount: 300.30, date: '02/03/2022' },
  { userId: 126, transactionId: 1018, amount: 45.30, date: '02/09/2022' },
  { userId: 126, transactionId: 1019, amount: 76.30, date: '02/11/2022' },
  { userId: 126, transactionId: 1020, amount: 74.30, date: '02/14/2022' },
  { userId: 126, transactionId: 1021, amount: 230.30, date: '02/21/2022' },
  { userId: 126, transactionId: 1022, amount: 45.30, date: '02/27/2022' },
  { userId: 126, transactionId: 1023, amount: 67.30, date: '03/04/2022' },
  { userId: 126, transactionId: 1024, amount: 33.30, date: '03/06/2022' },
  { userId: 126, transactionId: 1025, amount: 24.30, date: '03/08/2022' },
  { userId: 126, transactionId: 1026, amount: 74.30, date: '03/10/2022' },

  { userId: 127, transactionId: 1027, amount: 132.30, date: '01/01/2022' },
  { userId: 127, transactionId: 1028, amount: 164.30, date: '01/02/2022' },
  { userId: 127, transactionId: 1029, amount: 13.30, date: '01/13/2022' },
  { userId: 127, transactionId: 1030, amount: 42.30, date: '01/23/2022' },
  { userId: 127, transactionId: 1031, amount: 64.30, date: '02/15/2022' },
  { userId: 127, transactionId: 1032, amount: 54.30, date: '02/19/2022' },
  { userId: 127, transactionId: 1033, amount: 332.30, date: '03/03/2022' },
  { userId: 127, transactionId: 1034, amount: 123.30, date: '03/08/2022' },
  { userId: 127, transactionId: 1035, amount: 53.30, date: '03/09/2022' },

  { userId: 128, transactionId: 1036, amount: 13.30, date: '01/13/2022' },
  { userId: 128, transactionId: 1037, amount: 53.30, date: '01/23/2022' },
  { userId: 128, transactionId: 1038, amount: 54.30, date: '01/30/2022' },
  { userId: 128, transactionId: 1039, amount: 64.30, date: '02/03/2022' },
  { userId: 128, transactionId: 1040, amount: 136.30, date: '02/13/2022' },
  { userId: 128, transactionId: 1041, amount: 154.30, date: '02/19/2022' },
  { userId: 128, transactionId: 1042, amount: 32.30, date: '02/23/2022' },
  { userId: 128, transactionId: 1043, amount: 13.30, date: '03/03/2022' },
  { userId: 128, transactionId: 1044, amount: 54.30, date: '03/06/2022' },
  { userId: 128, transactionId: 1045, amount: 160.30, date: '03/13/2022' },
];

// To get all transactions for a userId
export const getTransactions = (userId) => {
  return transactions.filter(transaction => transaction?.userId === userId)
};

// To get all Users
export const getUsers = () => {
  return users;
}

// To get user by userId
export const getUser = (userId) => {
  return users.filter(user => user?.userId === userId)
};