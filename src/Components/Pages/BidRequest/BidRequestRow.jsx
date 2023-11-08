const BidRequestRow = ({ project, handleAccept, handleReject }) => {
  const { _id, jobTitle, userEmail, deadline, price, status } = project;
  return (
    <tr className="hover">
      <th>{jobTitle}</th>
      <td>{userEmail}</td>
      <td>{deadline}</td>
      <td>{price}</td>
      <td className="text-secondary font-bold">
      {
    status === "In Progress" ? status === "In Progress" ? 
    <span>In Progress</span>
   : <span className="text-black">Pending</span> : status === "Canceled" ? <span className="text-red-600">Canceled</span> : <span className="text-black">Pending</span>
      }
      </td>
      <td>
       {
        status === 'In Progress' || status === 'Canceled' ? "" : <> <button
        onClick={() => handleAccept(_id)}
        className="btn btn-xs btn-outline btn-success mr-2"
      >
        Accept
      </button>
      <button
        onClick={() => handleReject(_id)}
        className="btn btn-xs btn-outline btn-error"
      >
        Reject
      </button></>
       }
      </td>
    </tr>
  );
};

export default BidRequestRow;
