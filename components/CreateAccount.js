import BlobNumber from "./BlobNumber"

const CreateAccount = () => {
  return (
    <section>
      <div className="title">
        <BlobNumber number="1" />
        <h3>CREATE YOUR ACCOUNT</h3>
      </div>
      <label>email</label>
      <input id="email" type="text"/>
      <label>password</label>      
      <input id="password" type="text"/>
    </section>
  )
}

export default CreateAccount
