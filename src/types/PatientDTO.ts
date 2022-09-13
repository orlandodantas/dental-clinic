type PatientDTO = {
  id: string;
  name: string;
  address: string;
  number: string | null;
  city: string;
  state: string;
  cep: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  sale?: [];
};

export default PatientDTO;
