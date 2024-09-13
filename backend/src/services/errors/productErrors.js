//PRODUCT ERRORS
export const argsJobError = (job) => {
  let {
    role,
    currency,
    modality,
    requirements,
    description,
    contract_type,
    experience,
    working_hours,
  } = job;
  return `
    Una o más propiedades estaban incompletas o no válidas.
    Lista de propiedades requeridas:
    * Puesto: debe ser una cadena de texto, se recibió ' ${
      role ? role : undefined
    } ' (${typeof role})
    * Divisa: debe ser una cadena de texto, se recibió ' ${
      currency ? currency : undefined
    } ' (${typeof currency})
    * Modalidad: debe ser una cadena de texto, se recibió ' ${
      modality ? modality : undefined
    } ' (${typeof modality})
    * Requerimientos: debe ser una cadena de texto, se recibió ' ${
      requirements ? requirements : undefined
    } ' (${typeof requirements})
    * Description: debe ser una cadena de texto, se recibió ' ${
      description ? description : undefined
    } ' (${typeof description})
    * Experiencia: debe ser un valor booleano, se recibió ' ${
      experience ? experience : undefined
    } ' (${typeof experience})
    * Horas de trabajo: debe ser una cadena de texto, se recibió ' ${
      working_hours ? working_hours : undefined
    } ' (${typeof working_hours})
    * Tipo de contrato: debe ser una cadena de texto, se recibió ' ${
      contract_type ? contract_type : undefined
    } ' (${typeof contract_type})`;
};

export const invalidQuantityProductError = (quantity) => {
  return `Cantidad inválida (${quantity}). Se espero un valor numérico entero`;
};

export const IdNotFoundJobError = (id) => {
  return `El id (${id}), no se encuentra referenciado a ningún producto`;
};

//CART ERRORS
export const IdNotFoundCartError = (id) => {
  return `El id (${id}), no se encuentra referenciado a ningún carrito`;
};

//FAVORITES ERROR
export const IdNotFoundFavoritesError = (id) => {
  return `El id (${id}), no se encuentra referenciado a ningún favoritos`;
};

//USER ERRORS
export const missingCredentials = () => {
  return `Por favor, revise que la información esté completa`;
};

export const missingToken = () => {
  return `No se encontro un token adecuado de acceso, por favor logueate`;
};
