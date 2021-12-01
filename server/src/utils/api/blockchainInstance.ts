
import axios, { AxiosResponse } from 'axios';
const blockchain_url = process.env.BLOCKHAIN_URL as string || `https://blockchain.info`

// create axios instance
export const blockchainInstance = axios.create({baseURL:blockchain_url , headers: { 'Content-Type': 'application/json' } })
