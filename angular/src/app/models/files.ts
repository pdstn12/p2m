export default interface files {
  files: File[];
  count: number;
}

interface File {
  id: number;
  title: string;
  path: string;
  class: string;
  matier: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  phone: string;
  class: string;
  type: number;
  photo: string;
  departement?: any;
  created_at: string;
  updated_at: string;
}