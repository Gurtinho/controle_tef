// tipagem com a finalidade de alterar os campos
export type Replace<T, R> = Omit<T, keyof R> & R;
