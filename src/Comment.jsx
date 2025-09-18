export default function Comment({ commentsData }) {
  return (
    <div className="cart">
      <h2>{commentsData.name} ({commentsData.username})</h2>
      <p>Email: {commentsData.email}</p>
      <p>Phone: {commentsData.phone}</p>
      <p>Website: {commentsData.website}</p>

      <h3>Address</h3>
      <p>
        {commentsData.address.street}, {commentsData.address.suite},<br />
        {commentsData.address.city} - {commentsData.address.zipcode}
      </p>
      <p>Geo: {commentsData.address.geo.lat}, {commentsData.address.geo.lng}</p>

      <h3>Company</h3>
      <p>Name: {commentsData.company.name}</p>
      <p>CatchPhrase: {commentsData.company.catchPhrase}</p>
      <p>BS: {commentsData.company.bs}</p>
    </div>
  );
}
