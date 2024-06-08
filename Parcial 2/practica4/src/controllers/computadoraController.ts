import { Request, Response } from "express";
import  {axiosClient, fetchClient} from "../utils/httpClient";

// URL del servicio REST de tu compañero
const externalServiceURL = 'https://f1bf-102-177-174-30.ngrok-free.app/api/computadoras';

// Controlador para obtener los datos desde el servicio REST de tu compañero
export const getAllTablas = async (req: Request, res: Response) => {
  console.log('Recibida solicitud para obtener todas las tablas');
  try {
    // Realizar solicitudes simultáneas a través de axios y fetch
    const [axiosData, fetchData] = await Promise.all([
      axiosClient.get(externalServiceURL),
      fetchClient.get(externalServiceURL)
    ]);

    console.log('Datos recibidos del servicio externo con axios:', axiosData);
    console.log('Datos recibidos del servicio externo con fetch:', fetchData);

    // Combinar las respuestas
    const combinedData = {
      axiosData,
      fetchData
    };

    res.status(200).json(combinedData);
  } catch (error) {
    console.error('Error al obtener datos del servicio externo:', error);
    res.status(500).json({ message: 'Error al obtener datos del servicio externo' });
  }
};