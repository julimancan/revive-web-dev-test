import styled from "@emotion/styled"
import BlobNumber from "./BlobNumber"


const CreateAccWrapper = styled.section``;

const CreateAccount = () => {
  
  return (
    <CreateAccWrapper>
      <div className="title">
        <BlobNumber number="1" />
        <h3>CREATE YOUR ACCOUNT</h3>
      </div>

      <label>Email</label>
      <input id="email" type="text"/>
      <label>Password</label>      
      <input id="password" type="text"/>
    </CreateAccWrapper>
  )
}

export default CreateAccount
