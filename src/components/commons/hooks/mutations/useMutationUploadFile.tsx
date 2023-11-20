import { gql, useMutation } from "@apollo/client";
import type { MutationTuple } from "@apollo/client";
import type { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const useMutationUploadFile = (): MutationTuple<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs> => {
  const mutation = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  return mutation;
};
