// Fix for browser environment - process.env is not available
const NODE_ENV = typeof process !== 'undefined' ? process.env.NODE_ENV : 'development';
const { hostname } = window.location;

const servers = {
  // local: "http://localhost:3050",
  local: "https://api.myzabiha.com",
  live: "https://api.myzabiha.com",
  dummy: "https://9d2f-204-157-158-10.ngrok-free.app",
};

let URL;

if (hostname.includes("myzabiha.com")) {
  URL = servers.live;
} else {
  URL = servers.local;
}

console.log('API Configuration:', { NODE_ENV, hostname, URL });

export const SOCKET_URL = URL;
export const UPLOADS_URL = `${URL}/`;
export const BASE_URL = `${URL}/v1`;