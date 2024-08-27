import endpoint from "shared/endpoint";

export function getGuestToken() {
  return endpoint.post("/login/guests");
}

export function login(data: any) {
  return endpoint.post("/login", data);
}
export function forgetPassword(data: any) {
  return endpoint.post("/forget-password", data);
}

export function resetPassword(data: any) {
  return endpoint.post("/reset-password", data);
}

export function updateProfile(data: any) {
  return endpoint.put("/update-profile", data);
}

export function changePassword(data: any) {
  return endpoint.post("/update-password", data);
}
