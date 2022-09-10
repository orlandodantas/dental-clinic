import { Role } from './UserDTO';

type Payload = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export default Payload;
