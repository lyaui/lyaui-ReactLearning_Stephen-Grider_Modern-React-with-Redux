import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bnF1fYfETOs-tFMrvbAdZ0n1fWoRCLGGfIzSdTjOUtI',
  },
});
