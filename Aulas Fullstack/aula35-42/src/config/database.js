let ambiente = undefined;

switch (process.env.PUBLISH){
case "HML":
    ambiente = configurarHML();
    break;
case "LOCAL":
    ambiente = configurarLOCAL();
    break;
case "PROD":
    ambiente = configurarPROD();
    break;

    default:
        ambiente = configurarLOCAL();
break;
}

function configurarPROD (){
return{
    dialect: process.env.PROD_DIALECT,
    host: process.env.PROD_HOST,
    username: process.env.PROD_USER_NAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    port: process.env.PROD_PORT, 
}
}

function configurarLOCAL (){
    return{
    dialect: process.env.LOCAL_DIALECT,
    host: process.env.LOCAL_HOST,
    username: process.env.LOCAL_USER_NAME,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DATABASE,
    port: process.env.LOCAL_PORT, 
}
}

function configurarHML (){
    return{
    dialect: process.env.HML_DIALECT,
    host: process.env.HML_HOST,
    username: process.env.HML_USER_NAME,
    password: process.env.HML_PASSWORD,
    database: process.env.HML_DATABASE,
    port: process.env.HML_PORT, 
}
}

