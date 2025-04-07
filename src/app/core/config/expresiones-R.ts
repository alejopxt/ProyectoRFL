// Clase que contiene expresiones regulares reutilizables para validar datos en formularios
export class ExpresionesR {

  //  Valida correos electrónicos que solo sean de Hotmail, Outlook o Gmail
  // Ejemplo válido: juana@gmail.com
  public static readonly EMAIL: RegExp = /^[a-zA-Z0-9._%+-]+@(hotmail|outlook|gmail)\.com$/;

  //  Valida contraseñas de mínimo 8 caracteres alfanuméricos (letras y números)
  // No permite símbolos ni caracteres especiales
  public static readonly PASSWORD: RegExp = /^[A-Za-z0-9]{8,}$/;

  //  Valida nombres que solo contengan letras (mayúsculas, minúsculas, tildes y la letra ñ)
  // Permite espacios entre nombres
  public static readonly NOMBRE: RegExp = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  //  Valida documentos que solo contengan números
  // Ejemplo válido: 12345678
  public static readonly DOCUMENTO: RegExp = /^[0-9]+$/;

  //  Valida archivos de imagen con extensiones .jpg, .jpeg o .png (sin importar mayúsculas o minúsculas)
  public static readonly FORMATO_IMAGEN: RegExp = /\.(jpg|jpeg|png)$/i;

}
