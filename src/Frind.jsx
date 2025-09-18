export default function Friend({ frinde }) {
  console.log(frinde);
  const { name, email, phone, username, website } = frinde;
  return (
    <div className="cart">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>phone: {phone}</p>
      <p>username: {username}</p>
      <p>website : {website}</p>
    </div>
  );
}
