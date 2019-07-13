declare module 'MyModels' {
    export type User = {
      id: number;
      fio: string;
      age: number;
      city: string;
    };

    export type SearchState = {
      isLoading: boolean;
      users: User[];
      selectedUser?: User;
    }
  }