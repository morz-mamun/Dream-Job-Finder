const MyBidRow = ({ project }) => {
  const { jobTitle, userEmail, deadline } = project;

  return (
    <tr className="hover">
      <th>{jobTitle}</th>
      <td>{userEmail}</td>
      <td>{deadline}</td>
      <td>
        <button className="btn btn-secondary btn-sm">Pending</button>
      </td>
    </tr>
  );
};

export default MyBidRow;
