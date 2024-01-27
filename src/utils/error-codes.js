const ClientErrorsCodes = Object.freeze({
   BAD_REQUEST : 400,
   UNAUTHORISED : 401,
   NOT_FOUND : 404
});

const ServerErrorsCodes = Object.freeze({
  INTERNAL_SERVER_ERROR : 500,
  NOT_IMPLEMENTED : 501,
});

const SuccesCodes = Object.freeze({
   CREATED : 200,
   OK : 201,
});

module.exports={
        ClientErrorsCodes,
        ServerErrorsCodes,
        SuccesCodes
}