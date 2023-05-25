export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  ];
  
  export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
  ];
  
  export const ResColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "username",
      width: 150,
    },
    {
      field: "hotel",
      headerName: "hotel",
      width: 100,
    },
    {
      field: "checkIn",
      headerName: "checkIn",
      width: 230,
    },
    {
      field: "checkOut",
      headerName: "checkOut",
      width: 100,
    },
    {
      field: "price",
      headerName: "price",
      width: 100,
    },
  ];
  export const roomColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "maxPeople",
      headerName: "Max People",
      width: 100,
    },
  ];