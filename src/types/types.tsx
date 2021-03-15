export type VideoProps = {
  key?: string;
  id: string;
  category?: string;
  title: string;
  image: string;
  path: string;
  completed: boolean;
  url?: string;
};

export type VProps = {
  category: string;
};

export type CourseProps = {
  title: string;
  image?: string;
  path: string;
  completed?: boolean;
};

export type AuthProps = {
  email: string;
  password: string;
};

export type ProfileProps = {
  userName: string;
  userGender: string;
  userMessage: string;
  userImage: string;
};

export type PProps = {
  name: string;
  gender: string;
  message: string;
  image: string;
};

export type ProfileFormProps = {
  name: string;
  gender: string;
  message: string;
};

export type HandleRemove = {
  handelRemove: () => void;
};

export type PProps = {
  name: string;
  gender: string;
  message: string;
  image: string;
};

export type VProps = {
  category: string;
};
