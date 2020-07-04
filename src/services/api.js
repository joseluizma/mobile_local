import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com fisico: Ip da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulator: 10.0.2.2 (Android Studio)
 * Android com físico: IP da máquina
 */
