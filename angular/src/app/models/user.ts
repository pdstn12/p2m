export default interface User {
  user: UserData;
  access_token: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  phone: string;
  class: string;
  type: number;
  photo?: any;
  departement?: any;
  created_at: string;
  updated_at: string;
}