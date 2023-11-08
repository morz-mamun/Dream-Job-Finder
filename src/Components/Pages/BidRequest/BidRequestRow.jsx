

const BidRequestRow = ({project, handleAccept}) => {
    const { _id, jobTitle, userEmail, deadline, price } = project;
    return (
        <tr className="hover">
      <th>{jobTitle}</th>
      <td>{userEmail}</td>
      <td>{deadline}</td>
      <td>{price}</td>
      <td className="text-secondary font-bold">
        Pending
      </td>
      <td>
      <button onClick={() => handleAccept(_id)} className="btn btn-xs btn-outline btn-success mr-2">Accept</button>
      <button className="btn btn-xs btn-outline btn-error">Reject</button>
      </td>
    </tr>
    );
};

export default BidRequestRow;