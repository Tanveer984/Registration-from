const Table = () => {
  let Data = JSON.parse(localStorage.getItem("Data") || "[]");
  // console.log("Data:", Data);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">DOB/Age</th>
            <th scope="col">Address</th>
            <th scope="col">Occupation</th>
            <th scope="col">Nationality</th>
          </tr>
        </thead>
        {Data.map((el, i) => (
          <tbody key={i}>
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{el.Name}</td>
              <td>{el.DOB}</td>
              <td>
                {el.Address} {el.City} {el.State} {el.Country} {el.Pincode}
              </td>
              <td>{el.Occupation}</td>
              <td>{el.Nationality}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default Table;
