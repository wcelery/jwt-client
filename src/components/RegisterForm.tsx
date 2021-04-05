export default function RegisterForm() {
  return (
    <form>
      <div className="fields">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
