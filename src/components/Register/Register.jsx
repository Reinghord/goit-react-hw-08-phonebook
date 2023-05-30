function Register() {
  const onSubmit = e => e.preventDefault;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" />
      <input type="email" />
      <input type="password" />
      <button type="submit"></button>
    </form>
  );
}

export default Register;
