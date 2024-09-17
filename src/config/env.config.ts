const PORT_DEFAULT = 8000;
const PORT= process.env.PORT === undefined ? PORT_DEFAULT : Number.parseInt(process.env.PORT);

export const ENV_CONFIG =  {
    PORT,
    PORT_DEFAULT
}