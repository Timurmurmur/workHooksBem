export const passChecker = (data: string) => {
  const password = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return !password.test(data);
};
export const emailChecker = (data: string) => {
  const email = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}),?\s*){1,3}$/;
  return !email.test(data);
};
