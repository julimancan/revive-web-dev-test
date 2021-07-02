import styled from "@emotion/styled"

const BlobWrapper = styled.div`
  background-image: url("/yellowBlob.png");
  background-repeat: no-repeat;
  background-size: 30px 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
`;

const BlobNumber = ({ number }) => {
  return (
    <BlobWrapper>
      {number}
    </BlobWrapper>
  )
}

export default BlobNumber
