export type VideoProps = {
  key: string;
  id: string;
  title: string;
  image: string;
  path: string;
  completed: boolean;
  url?: string;
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

export type HandleRemove = {
  handelRemove: () => void;
};
